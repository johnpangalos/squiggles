<script lang="ts">
  export let to: string;
  function handleClick(event: MouseEvent) {
    event.preventDefault();
    history.pushState({ path: to }, null, to);
    window.dispatchEvent(new Event("popstate"));
  }
</script>

<a href={to} class="underline font-bold cursor-pointer" on:click={handleClick}>
  <slot />
</a>
