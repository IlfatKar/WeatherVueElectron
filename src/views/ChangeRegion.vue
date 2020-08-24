import {ipcRenderer} from "electron"
<template>
  <div class="home">
    <h4 v-if="this.$store.getters.error === 404">
      {{'IncorrectCity' | localize}}
    </h4>
    <form @submit.prevent="submitHandler" v-if="!this.loading">
      <label for="change">{{'EnterCity' | localize}}</label> <br/>
      <input id="change" type="text" v-model.trim="city"/> <br/>
      <small v-if="result">{{ this.result }}</small> <br v-if="result"/>
      <button type="submit">{{'Save' | localize}}</button>
    </form>
    <Loader v-else />
  </div>
</template>

<script>
  import {ipcRenderer} from 'electron'
  import Loader from '../components/Loader'
  import localizeFilter from '../filters/localize.filter'

  export default {
    name: 'ChangeRegion',
    components: {Loader},
    data: () => ({city: null, result: null, loading: false}),
    methods: {
      async submitHandler() {
        try {
          this.loading = true
          this.$store.commit('setCity', this.city)
          await this.$store.dispatch('fetchData')
          if (this.$store.getters.data.cod === '404') {
            throw new Error('Incorrect city')
          }
          this.loading = false
          this.$store.commit('setError', null)
          this.result = localizeFilter('Success')

          let city = this.$store.getters.city
          let theme = this.$store.getters.theme
          let lang = this.$store.getters.lang
          await ipcRenderer.invoke('updateState', {city, theme, lang})

        } catch (e) {
          console.error(e)
          this.result = localizeFilter('Error')
          let city = this.$store.getters.city
          let theme = this.$store.getters.theme
          let lang = this.$store.getters.lang
          await ipcRenderer.invoke('updateState', {city, theme, lang})
          this.loading = false
        }
      }
    }
};
</script>

<style scoped>
.home {
  width: calc(100% - 100px);
  margin-left: 90px;
  padding-top: 30px;
  font-size: 2rem;
}
input {
  width: 300px;
  height: 30px;
}
button {
  height: 30px;
  width: 100px;
}
small {
  font-size: 1.5rem;
}
</style>
