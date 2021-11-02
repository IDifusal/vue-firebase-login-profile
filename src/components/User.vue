<template>
  <div>
    <slot name="user" :user="user"></slot>
  </div>
</template>
<script>
import { auth } from "../firebase";
import { ref } from "@vue/composition-api";
import { onAuthStateChanged } from "firebase/auth";
export default {
  setup() {
    const user = ref(null);
    const unsuscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => (user.value = firebaseUser)
    );
    return {
      user,
      unsuscribe,
    };
  },
  destroyed() {
    this.unsuscribe;
  },
};
</script>
<style lang="">
</style>