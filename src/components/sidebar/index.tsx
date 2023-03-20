import { component$ } from "@builder.io/qwik";
import SidebarItem from "@/components/sidebar-item";
import {GoHubot} from "@qwikest/icons/octicons"
export const Sidebar = component$(() => {
  return (
    <div class={"flex-col gap-2 flex bg-base-200 h-full z-20 fixed  w-[260px] "}>
      <div class="flex gap-2 items-center px-4 min-h-16 ">
        <img src="/images/logo.svg" alt="Logo" height={48} width={48}></img>
        <div class="text-3xl">
          <span class="text-primary">Mi</span>mercado

        </div>

      </div>
        <ul class="prose menu px-2 prose-a:no-underline prose-a:p-2">
        <SidebarItem route="/" icon={GoHubot} name="Price generator" />
        </ul>
    </div>
  );
});

export default Sidebar;
