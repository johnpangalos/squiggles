<script lang="ts">
  import { onDestroy } from "svelte";
  import { location } from "../stores/router";

  function locationSetter() {
    location.update(() => document.location);
  }

  window.addEventListener("popstate", locationSetter);

  onDestroy(() => window.removeEventListener("popstate", locationSetter));
</script>

<slot />
