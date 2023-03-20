import { component$, createContextId, Signal, useContextProvider, useSignal, useStore } from "@builder.io/qwik";
import PriceGeneratorForm from "@/components/form/price-generator-form";
import Modal from "@/components/modal";

export const PriceGeneratorModalCTX = createContextId<{isOpen: Signal<boolean>}>('price-generator.modal');
export const PriceGeneratorFormCTX = createContextId<PriceGeneratorState>("price-generator.form")
export interface PriceGeneratorState{
  jpy: number,
  jpyAmount: number,
  mxnAmount: number,
  fees: number,
  customs: number,
  revenue: number,
  name?: string,
}


export default component$(() => {
  const isOpen = useSignal(false)
  const state = useStore<PriceGeneratorState>({ customs: 0, fees: 0, jpy: 0, jpyAmount: 0, mxnAmount: 0, revenue: 0 })
  useContextProvider(PriceGeneratorModalCTX, {isOpen: isOpen})
  useContextProvider(PriceGeneratorFormCTX, state)


  return (
    <div class="prose w-full max-w-5xl flex-grow">
      <h1>Price Generator</h1>
      <PriceGeneratorForm/>
      <Modal/>
    </div>
  );
});
