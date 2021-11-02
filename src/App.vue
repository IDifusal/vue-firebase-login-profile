<template>
  <div id="app">
    <h1>Vue Chat Firebase</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from "./firebase.js";
console.log(auth);
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
