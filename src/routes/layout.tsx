import { component$, Slot } from "@builder.io/qwik";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header/header";

export default component$(() => {

  return (
    <div class="h-screen">
        <Header/>
        <Sidebar />
      <main class=" pt-24 pb-8 pl-[292px] pr-8 h-screen w-full">
        <Slot />
      </main>
    </div>
  );
});
