<script lang="ts">
  import { onMount } from "svelte";
  const YOUR_CLIENT_ID =
    "837754270874-v3bq6l2kmkh6b3fm3n6i5o1ppcoa1kcn.apps.googleusercontent.com";
  const YOUR_REDIRECT_URI = "http://localhost:3000/google-callback";
  /*
  /* function oauth2SignIn() { */
  /*   // Google's OAuth 2.0 endpoint for requesting an access token */
  /*   const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"; */
  /*
  /*   // Create element to open OAuth 2.0 endpoint in new window. */
  /*   const form = document.createElement("form"); */
  /*   form.setAttribute("method", "GET"); // Send as a GET request. */
  /*   form.setAttribute("action", oauth2Endpoint); */
  /*
  /*   // Parameters to pass to OAuth 2.0 endpoint. */
  /*   const params = { */
  /*     client_id: YOUR_CLIENT_ID, */
  /*     redirect_uri: YOUR_REDIRECT_URI, */
  /*     scope: "https://www.googleapis.com/auth/userinfo.profile", */
  /*     state: "try_sample_request", */
  /*     include_granted_scopes: "true", */
  /*     response_type: "token", */
  /*   }; */
  /*
  /*   // Add form parameters as hidden input values. */
  /*   for (const p in params) { */
  /*     const input = document.createElement("input"); */
  /*     input.setAttribute("type", "hidden"); */
  /*     input.setAttribute("name", p); */
  /*     input.setAttribute("value", params[p]); */
  /*     form.appendChild(input); */
  /*   } */
  /*
  /*   // Add form to page and submit it to open the OAuth 2.0 endpoint. */
  /*   document.body.appendChild(form); */
  /*   form.submit(); */
  /* } */
  /* onMount(() => { */
  /*   oauth2SignIn(); */
  /* }); */
</script>

