<template>
  <div>
    Logged as {{ user.uid }}
    <button @click="auth.signOut()" class="button is-danger">SignOut</button>
  </div>
</template>
<script>
import { auth } from "../firebase";
export default {
  data() {
    return {
      auth,
    };
  },
  props: ["user"],
};
</script>