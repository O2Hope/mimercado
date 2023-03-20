import { component$ } from '@builder.io/qwik';
import Avatar from "@/components/avatar";
import Search from "@/components/input/search";

export default component$(() => {
  return (
    <navbar class="navbar bg-opacity-90 bg-base-100 backdrop-blur shadow fixed pl-[260px]">
      <div class="flex-1 ml-8">
        <Search/>
      </div>
      <div class="flex-none">
      <Avatar initials="AR"/>
      </div>
    </navbar>
  );
});
