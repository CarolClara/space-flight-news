<template>
  <div id="app">
    <articles />
  </div>
</template>

<script>
import Articles from "./components/Articles";

export default {
  name: 'App',
  components: {Articles}
}
</script>

<style>
#app {
  font-family: RobotoCondensed, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: #1E2022;
}
body, html {
  font-family: RobotoCondensed, sans-serif;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #1E2022;
}
</style>
