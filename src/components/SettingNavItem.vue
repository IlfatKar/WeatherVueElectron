<template>
  <div class="mainDivSettingItems">
    <div v-bind:class="{active: this.$route.params.type === 'settings'}">
      <router-link to="/settings/settings">
        <h1>{{'Settings' | localize}}</h1>
      </router-link>
    </div>
    <div v-bind:class="{active: this.$route.params.type === 'source'}">
      <router-link to="/settings/source">
        <h1>{{'Source' | localize}}</h1>
      </router-link>
    </div>
    <div v-bind:class="{active: this.$route.params.type === 'about'}">
      <router-link to="/settings/about">
        <h1>{{'Info' | localize}}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNavItem",
  props: ["type"]
};
</script>

<style scoped>
  .mainDivSettingItems {
    display: flex;
  }

  .black .active {
    background-color: #313131;
    transition: 1s;
  }

  .black .active a {
    text-decoration: none;
    color: #b7b7b7;
  }

  .black a {
    text-decoration: none;
    color: #b7b7b7;
  }

  .white .active {
    background-color: #e3e3e3;
    transition: 1s;
  }

  .white .active a {
    text-decoration: none;
    color: #000000;
  }

  .white a {
    text-decoration: none;
    color: #000000;
  }

  .mainDivSettingItems div {
    cursor: pointer;
    padding-left: 15px;
    line-height: 72px;
    height: 72px;
    width: 33%;
    display: grid;
    grid-template-columns: 30% 50% 20%;
    border-right: 1px solid black;
  }

  a {
    font-size: 1.3rem;
    /*color: black;*/
    text-decoration: none;
  }
</style>
