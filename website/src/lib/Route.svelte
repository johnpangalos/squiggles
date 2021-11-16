<script lang="ts">
  import { location } from "../stores/router";

  export let path: string;
</script>

{#if $location.pathname === path}
  <slot />
{/if}
