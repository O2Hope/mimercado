import { Component, component$ } from "@builder.io/qwik";

export interface SidebarItemProps {
  name: string;
  icon: Component<{}>;
  route: string;
  active?: boolean;
}

export default component$(({ name, icon: Icon, route, active }: SidebarItemProps) => {
  return (
    <li>
      <a class={`${active && "active"}`} href={route}>
        <Icon/>
        {name}
      </a>
    </li>
  );
});
