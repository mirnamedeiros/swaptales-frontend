<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "./components/Navbar.vue"
  export default {
    name: "App",
    components : {
      NavBar,
    }
  }
</script>

<style>
  @import 'assets/scss/style.scss';
</style>