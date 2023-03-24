import {
  component$,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({ images: [] });
  useVisibleTask$(async () => {
    const res = await fetch("/api/scraper").then((res) => res.json());

    state.images = res;
  });

  return (
    <div class="prose w-full max-w-4xl flex-grow pb-16">
      <h1>Scraper</h1>
      <section class="max-h-[600px] overflow-auto">
        <div className="container mx-auto px-5">
          <div className="-m-1 flex flex-wrap md:-m-2">
             {state.images.map((img, index) => (
            <div className="flex  w-1/2 md:w-1/3 lg:w-1/4 flex-wrap shadow">
              <div className="w-full p-1 md:p-2">
                {" "}
                <img
                  src={img}
                  alt={`$carrousel-${img}-${index}`}
                  class="block h-full w-full rounded-lg object-cover object-center"
                />
              </div>
            </div>
        ))}
          </div>
      </div>
      </section>
    </div>
  );
});
