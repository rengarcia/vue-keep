<template>
  <div id="app">
    <app-header />
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  components: {
    AppHeader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
