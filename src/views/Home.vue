import {ipcRenderer} from "electron"
<template>
  <div class="home">
<!--    <HomeNav />-->
    <main v-if="!this.loading">
      <h1>{{'WeatherIn' | localize}}{{this.data.name}}</h1>
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
import {ipcRenderer} from 'electron'

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

    await ipcRenderer.send('takeState')
    await ipcRenderer.on('takedState', (e, json) => {
      if(json !== 404 && JSON.parse(json).city){
        this.$store.commit('setCity', JSON.parse(json).city)
        this.$store.commit('setTheme', JSON.parse(json).theme)
        this.$store.commit('setLang', JSON.parse(json).lang)
        this.$store.dispatch("fetchData");
        this.loading = false;
      } else {
        this.$store.commit('setError', 404)
        this.$router.push('/changeRegion')
      }
    })

    if (this.$store.getters.data.cod === '404') {
      this.$store.commit('setError', 404)
     await this.$router.push('/changeRegion')
    }
  }
};
</script>
