import { component$ } from "@builder.io/qwik";
import SidebarItem from "@/components/sidebar-item";
import {LuBot, LuHistory} from "@qwikest/icons/lucide"
export const Sidebar = component$(() => {
  return (
    <div class={"flex-col gap-2 flex bg-base-200 h-full z-20 fixed  w-[260px] py-2"}>
      <div class="btn btn-ghost normal-case text-xl flex-none mx-4 ">
        <img src="/images/logo.svg" alt="Logo" height={48} width={48}></img>
          Mi<span class="text-primary">mercado</span>

      </div>
        <ul class=" menu px-2 prose-a:no-underline mx-2 pt-2">
        <SidebarItem route="/" icon={LuBot} name="Price generator" />
          <SidebarItem route="/history" icon={LuHistory} name="History" />
        </ul>
    </div>
  );
});

export default Sidebar;
