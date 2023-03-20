import { component$ } from "@builder.io/qwik";
import {GoSearch} from "@qwikest/icons/octicons";

export default component$(() => {

  return(
    <div class="form-control">
      <label class="input-group">
        <span><GoSearch/></span>
        <input type="text" placeholder="Search..." class="input input-bordered" />
      </label>
    </div>  )
})