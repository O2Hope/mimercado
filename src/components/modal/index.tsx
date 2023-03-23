import { component$, useContext } from "@builder.io/qwik";
import { PriceGeneratorModalCTX } from "@/routes/app/price-generator";
import PriceGeneratorStats from "@/components/stats/price-generator-stats";



export default component$(() => {
  const modal = useContext(PriceGeneratorModalCTX);

  return(
    <>
      <div class={`modal ${modal.isOpen.value && "modal-open"} `}>
        <div class="modal-box w-11/12 max-w-5xl">
          <label onClick$={() => modal.isOpen.value = false} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <PriceGeneratorStats/>
        </div>
      </div>
    </>
  )
})