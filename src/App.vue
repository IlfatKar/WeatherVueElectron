<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }



</style>

<script>

import Nav from './components/Nav'
export default {
  components: {
    Nav
  }
};
</script>
