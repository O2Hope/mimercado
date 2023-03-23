import {
  $,
  component$,
  useContext,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { LuBox, LuJapaneseYen } from "@qwikest/icons/lucide";
import {
  PriceGeneratorFormCTX,
  PriceGeneratorModalCTX,
} from "@/routes/app/price-generator";


export default component$(() => {
  const jpy = useSignal(0);
  const modal = useContext(PriceGeneratorModalCTX);
  const formState = useContext(PriceGeneratorFormCTX);
  const product = useStore<{ price: number; name: string }>({
    price: 0,
    name: "",
  });

  useVisibleTask$(async () => {
    const res = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/jpy/mxn.json`
    );

    const data = await res.json();

    jpy.value = data.mxn;
  });

  const handleOnCalculate = $(async () => {
    formState.jpy = jpy.value;
    formState.jpyAmount = product.price
    formState.mxnAmount = product.price * jpy.value
    formState.revenue = (formState.mxnAmount * 30) / 100
    formState.fees = ((formState.mxnAmount + formState.revenue ) * 57) / 100
    formState.customs = (formState.mxnAmount * 30 )/ 100
    formState.name = product.name
    modal.isOpen.value = true;
  });

  return (
    <div class="flex flex-col gap-6 flex-1 pb-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Product name</span>
        </label>
        <label class="input-group">
          <input
            type="text"
            placeholder="Cute figure"
            class="input input-bordered w-full"
            required
            onInput$={(e) =>
              (product.name = (e.target as HTMLInputElement).value)
            }
          />
          <span>
            <LuBox />
          </span>
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">AmiAmi Price</span>
        </label>
        <label class="input-group">
          <input
            placeholder="0.00"
            class="input input-bordered w-full"
            required
            type="text"
            onInput$={(e) =>
              (product.price = Number((e.target as HTMLInputElement).value))
            }
          />
          <span>
            <LuJapaneseYen />
          </span>
        </label>
      </div>
      <div class="self-end ">
        <button class="btn btn-primary" onClick$={handleOnCalculate}>
          Calculate
        </button>
      </div>
    </div>
  );
});
