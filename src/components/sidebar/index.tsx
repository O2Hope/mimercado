import { component$ } from "@builder.io/qwik";
import SidebarItem from "@/components/sidebar-item";
import { LuBot, LuHistory, LuBoxes, LuFileSearch, LuLayoutDashboard, LuPiggyBank, LuTags, LuLineChart } from "@qwikest/icons/lucide";
export const Sidebar = component$(() => {
  return (
    <div
      class={
        "flex-col gap-2 flex bg-base-200 h-full z-20 fixed  w-[260px] py-2"
      }
    >
      <div class="btn btn-ghost normal-case text-xl flex-none mx-4 ">
        <img src="/images/logo.svg" alt="Logo" height={48} width={48}></img>
        Mi<span class="text-primary">mercado</span>
      </div>
      <ul class="menu menu-compact flex flex-col p-0 px-4">

        <li class="menu-title">Store</li>
        <SidebarItem route="/" icon={LuLayoutDashboard} name="Dashboard" />
        <SidebarItem route="/posts" icon={LuTags} name="Posts" />
        <SidebarItem route="/inventory" icon={LuBoxes} name="Inventory" />
        <SidebarItem route="/statistics" icon={LuLineChart} name="Statistics" />
        <li className="mx-0"></li>
        <li className="menu-title">Utilities</li>
        <SidebarItem active route="/" icon={LuBot} name="Price generator" />

        <SidebarItem route="/scraper" icon={LuFileSearch} name="Scraper" />
        <SidebarItem route="/sale-hunter" icon={LuPiggyBank} name="Sale hunter" />
        <SidebarItem route="/history" icon={LuHistory} name="History" />
      </ul>
    </div>
  );
});

export default Sidebar;
