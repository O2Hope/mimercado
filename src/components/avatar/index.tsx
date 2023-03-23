import { component$ } from "@builder.io/qwik";

export interface AvatarProps{
  image?: string;
  initials?: string;
}

export default component$(({image, initials}: AvatarProps) => {
  return (
    <div class="avatar placeholder">
      <div class={`bg-neutral-focus text-neutral-content rounded-full ${image ? "w-16" : "w-8"}`}>
        {image ?
          <img src={image} /> :
          <span className="text-xs">{initials}</span>
        }
      </div>
    </div>
  )
})