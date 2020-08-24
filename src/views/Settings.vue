<template>
  <div class="home">
    <SettingsNav/>
    <transition name="fade">
      <main v-if="this.$route.params.type === 'settings'">
        <h1>{{'Settings' | localize}}</h1>
        <div class="settings">
          <form @submit.prevent="submitHandler">
            <div>
              <p>{{'ChangeLang' | localize}}</p>
              <input id="en" type="radio" name="lang" value="en" v-model="lang"/>
              <label for="en">English</label> <br/>
              <input id="ru" type="radio" name="lang" value="ru" v-model="lang"/>
              <label for="ru">Русский</label>
            </div>
            <br/>
            <div>
              <p>{{'ChangeTheme' | localize}}</p>
              <input
                  id="black"
                  type="radio"
                  name="theme"
                  value="black"
                  v-model="theme"
              />
              <label for="black">{{'Dark' | localize}}</label> <br/>
              <input
                  id="white"
                  type="radio"
                  name="theme"
                  value="white"
                  v-model="theme"
              />
              <label for="white">{{'Light' | localize}}</label>
            </div>
            <button type="submit">{{'Save' | localize}}</button>
          </form>
        </div>
      </main>
    </transition>

    <transition name="fade">
      <main v-if="this.$route.params.type === 'source'">
        <h1>{{'Source' | localize}}</h1>
        <p>{{'SourceItem' | localize}}</p>
        <img src="../assets/openWeather/openWeather.png" width="150px"/>
      </main>
    </transition>
    <transition name="fade">
      <main v-if="this.$route.params.type === 'about'">
        <h1>{{'Info' | localize}}</h1>
        <p>{{'Author' | localize}}</p>
        <p>ilfatkarimov123@gmail.com</p>
      </main>
    </transition>
  </div>
</template>

<script>
  import {ipcRenderer} from 'electron'
  import SettingsNav from '../components/SettingsNav'

  export default {
    name: 'Settings',
    components: {
      SettingsNav
    },
    data: () => ({
      theme: null,
      lang: null
    }),
    mounted() {
    this.theme = this.$store.getters.theme;
    this.lang = this.$store.getters.lang;
  },
  methods: {
    submitHandler() {
      this.$store.commit('setTheme', this.theme)
      this.$store.commit('setLang', this.lang)

      let city = this.$store.getters.city
      let theme = this.$store.getters.theme
      let lang = this.$store.getters.lang
      ipcRenderer.invoke('updateState', {city, theme, lang})

    }
  }
};
</script>

<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(-70px);
    transition: 1s;

  }

  .home {
    width: calc(100% - 70px);
    margin-left: 70px;
  }

  main {
    padding-top: 15px;
    padding-left: 15px;
    font-size: 1.4rem;
    position: absolute;
  }

  h1 {
    font-size: 2.3rem;
    margin-bottom: 20px;
  }

  input {
    margin-right: 5px;
  }

  label {
    cursor: pointer;
}

p {
  margin-bottom: 5px;
}

button {
  margin-top: 20px;
  height: 30px;
  width: 150px;
}
</style>
