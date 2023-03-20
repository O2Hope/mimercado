import { Component, component$ } from "@builder.io/qwik";

export interface SidebarItemProps {
  name: string;
  icon: Component<{}>;
  route: string;
}

export default component$(({ name, icon: Icon, route }: SidebarItemProps) => {
  return (
    <li>
      <a href={route}>
        <Icon/>
        {name}
      </a>
    </li>
  );
});
