import { component$, Slot } from "@builder.io/qwik";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header/header";

export default component$(() => {

  return (
    <div class="h-screen">
      <div class="ml-[320px]">
      <Header/>
      </div>
      <div class="w-max max-w-sm fixed inset-y-0 w-[320px] z-20">
          <Sidebar />
      </div>
      <main class="ml-[200px] mr-[32px] ">
        <Slot />
      </main>
    </div>

  );
});
