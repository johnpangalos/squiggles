<script lang="ts">
  import Router from "./lib/Router.svelte";
  import Route from "./lib/Route.svelte";
  import Home from "./lib/Home.svelte";
  import GoogleSignIn from "./lib/GoogleSignIn.svelte";
  import GoogleCallback from "./lib/GoogleCallback.svelte";

  import Link from "./lib/Link.svelte";
</script>

<main>
  <nav class="flex space-x-2 pb-4">
    <Link to="/google-sign-in">Sign In</Link>
    <Link to="/">home</Link>
  </nav>
  <Router>
    <Route path="/"><Home /></Route>
    <Route path="/google-sign-in"><GoogleSignIn /></Route>
    <Route path="/google-callback"><GoogleCallback /></Route>
  </Router>
</main>
