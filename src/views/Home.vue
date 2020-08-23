<template>
  <div class="home">
<!--    <HomeNav />-->
    <main v-if="!this.loading">
      <h1>Погода в городе {{this.data.name}}</h1>
      <div id="weather">
        <Weather :temps="this.data.main" :weather="this.data.weather"/>
        <Descr :main="this.data.main" :wind="this.data.wind"/>
      </div>
    </main>
    <Loader v-else/>
  </div>
</template>

<style scoped>
.home {
  width: calc(100% - 70px);
  margin-left: 70px;
}
main {
  padding: 15px 25px;
}
#weather {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>

<script>
import HomeNav from "../components/HomeNav";
import Weather from "../components/Weather";
import Descr from '../components/Descr'
import { mapGetters } from "vuex";
import Loader from '../components/Loader'
export default {
  name: "Home",
  computed: {
    ...mapGetters(["data"])
  },
  data:() => ({
    weather: null,
    loading: true
  }),
  components: {
    Loader,
    Descr,
    Weather,
    HomeNav
  },
  async mounted() {
    await this.$store.dispatch("fetchData");
    this.loading = false;
    if (this.$store.getters.data.cod === '404') {
      this.$store.commit('setError', 404)
      await this.$router.push('/changeRegion')
    }
  },
};
</script>
