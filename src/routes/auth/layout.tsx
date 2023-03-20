import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1> Layout Auth</h1>
      <Slot />
    </>
  );
});
