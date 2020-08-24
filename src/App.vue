<template>
  <div id="app" v-bind:class="$store.getters.theme">
    <Nav style="-webkit-app-region: drag;"/>
    <router-view class="view"/>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    -webkit-user-select: none; /* Google Chrome, Opera Next, Safari */
    font-family: "Roboto", sans-serif;
  }

  .black {
    background-color: #1f1f1f;
    color: #b7b7b7;
    transition: 1s;

  }

  .black .container {
    background-color: #313131;
  }

  .black .container svg {
    color: #ffffff;
  }

  .container a:focus {
    outline: none;
    outline-offset: 0;
  }

  .black .container a {
    color: #ffffff;
  }

  .black input, textarea, button {
    background-color: #eeeeee;
    border: 1px solid black;
  }

  .white .container svg {
    color: #1f1f1f;
  }

  .white .container a {
    color: #1f1f1f;
  }

  .white input, textarea, button {
    background-color: #eeeeee;
    border: 1px solid black;
  }

  .white {
    background-color: #ffffff;
    color: #1f1f1f;
    transition: 1s;
  }

  .white .container {
    background-color: #e3e3e3;
  }

  .view {
    height: 100vh;
  }

  input:focus, textarea:focus, button:focus {
    outline-offset: 0;
    outline: none;
    padding-left: 5px;
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
