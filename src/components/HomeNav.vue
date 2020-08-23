<template>
    <nav>
        <HomeNavItem v-for="n in 3" :key="n"/>
    </nav>
</template>

<script>
  import HomeNavItem from './HomeNavItem'
  export default {
    name: 'HomeNav',
    components: {HomeNavItem}
  }
</script>

<style scoped>
    nav {
        border-bottom: 1px solid black;
        display: flex;
    }

</style>