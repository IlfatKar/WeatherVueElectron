<template>
  <nav>
    <div id="navOpen" class="btn navChild">
      <font-awesome-icon icon="bars" size="2x" />
    </div>
    <div class="btn navChild" id="navHomePage">
      <font-awesome-icon icon="home" size="2x" />
    </div>
    <div class="btn navChild" id="navMap">
      <font-awesome-icon icon="map-marked" size="2x" />
    </div>
    <div class="btn navChild" id="navSettings">
      <font-awesome-icon icon="cog" size="2x" />
    </div>
    <div class="btn navChild" id="navFeedback">
      <font-awesome-icon icon="comment" size="2x" />
    </div>
  </nav>
</template>

<style scoped>
/* NAV STYLES */

nav {
  position: absolute;
  height: 100vh;
  width: 70px;
  border-right: 1px solid #202020;
  text-align: center;
}

.navChild {
  padding-top: 20px;
  padding-bottom: 20px;
}

#navOpen {
  border-bottom: 1px solid #202020;
}

#navFeedback {
  border-top: 1px solid #202020;
  margin-top: calc(100vh - 362px);
}

/* HOME PAGE */
</style>

<script>
export default {
  name: "Nav"
};
</script>
