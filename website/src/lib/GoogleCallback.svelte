<script lang="ts">
  import { onMount } from "svelte";
  const searchParams = new URLSearchParams(window.location.hash);

  for (const [key, value] of searchParams.entries()) {
    console.log(key, value);
  }

  onMount(() => {
    fetch("http://localhost:8787/session", {
      method: "POST",
      headers: {
        Authentication: `Bearer: ${searchParams.get("access_token")}`,
      },
    });
  });
</script>
