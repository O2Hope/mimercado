import { $, component$, useContext, useSignal, useTask$ } from "@builder.io/qwik";
import Avatar from "@/components/avatar";
import {
  LuBoxes,
  LuLineChart,
  LuJapaneseYen,
  LuDollarSign,
} from "@qwikest/icons/lucide";
import { PriceGeneratorFormCTX } from "@/routes/app/price-generator";

export default component$(() => {
  const indicator = useSignal(false);
  const formState = useContext(PriceGeneratorFormCTX);

  const formatCurrency = $((value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "mxn",
      maximumFractionDigits: 0,
    }).format(value)
  );

  const handleCopy = $(async() => {
    const suggestedPriceString = (formState.mxnAmount +
      formState.revenue +
      formState.customs +
      formState.fees
    ).toLocaleString("en-US", {maximumFractionDigits: 0})

    await navigator.clipboard.writeText(suggestedPriceString)

    indicator.value = true
  })

  useTask$(({track}) => {
    track(indicator)

    if(indicator) setTimeout(() => indicator.value = false, 3000)

  })

  return (
    <>
      <h3 className=" mt-0 mb-4 text-lg font-bold">Suggested price - {formState.name} </h3>
      <div className="flex justify-center flex-wrap gap-6 py-6">
        <div className="stats stats-vertical md:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-figure text-primary text-4xl">
              <LuJapaneseYen />
            </div>
            <div className="stat-title">JPY Price</div>
            <div className="stat-value text-primary">{formState.jpyAmount}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <LuDollarSign />
            </div>
            <div className="stat-title">MXN Price</div>
            <div className="stat-value text-secondary">
              {formatCurrency(formState.mxnAmount)}
            </div>
          </div>
        </div>
        <div class="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <Avatar image="https://blog.saleslayer.com/hubfs/mercado-libre-logo.jpg" />
            </div>
            <div className="stat-title">Fees + Tax</div>
            <div className="stat-value text-secondary">28.5%</div>
            <div className="stat-desc">{formatCurrency(formState.fees)}</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-primary text-4xl">
              <LuBoxes />
            </div>
            <div class="stat-title">Customs</div>
            <div class="stat-value text-primary">30%</div>
            <div class="stat-desc">{formatCurrency(formState.customs)}</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary text-4xl">
              <LuLineChart />
            </div>
            <div class="stat-title">Revenue</div>
            <div class="stat-value text-secondary">30%</div>
            <div class="stat-desc">{formatCurrency(formState.revenue)}</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center justify-center font-bold gap-3 m-4">
        <h3 className="text-3xl m-0">Suggested price:</h3>
        <div className="indicator">
          {indicator.value && <span className="indicator-item badge badge-secondary">copied!</span>}
          <p onClick$={handleCopy} className="text-primary text-3xl m-0 cursor-pointer">
          {formatCurrency(formState.mxnAmount +
            formState.revenue +
            formState.customs +
            formState.fees)}

        </p>
        </div>
      </div>
    </>
  );
});
