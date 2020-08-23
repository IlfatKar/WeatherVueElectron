<template>
  <div class="mainDivSettingItems">
    <div>
      <router-link to="/settings/settings">
        <h1>Настройки</h1>
      </router-link>
    </div>
    <div>
      <router-link to="/settings/source">
        <h1>Источники</h1>
      </router-link>
    </div>
    <div>
      <router-link to="/settings/about">
        <h1>Сведения</h1>
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
 a{
   font-size: 1.3rem;
    color: black;
    text-decoration: none;
  }
</style>
