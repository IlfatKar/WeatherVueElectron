<template>
  <div class="home">
    <SettingsNav />
    <main v-if="this.$route.params.type === 'settings'">
      <h1>Настройки</h1>
      <div class="settings">
        <form @submit.prevent="submitHandler">
          <div>
            <p>Сменить язык</p>
            <input id="en" type="radio" name="lang" value="en" v-model="lang" />
            <label for="en">English</label> <br />
            <input id="ru" type="radio" name="lang" value="ru" v-model="lang" />
            <label for="ru">Русский</label>
          </div>
          <br />
          <div>
            <p>Сменить тему</p>
            <input
              id="black"
              type="radio"
              name="theme"
              value="black"
              v-model="theme"
            />
            <label for="black">Темная</label> <br />
            <input
              id="white"
              type="radio"
              name="theme"
              value="white"
              v-model="theme"
            />
            <label for="white">Светлая</label>
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </main>

    <main v-if="this.$route.params.type === 'source'">
      <h1>Источники</h1>
      <p>Источник данных и иконок - OpenWeather</p>
      <img src="../assets/openWeather/openWeather.png" width="150px" />
    </main>
    <main v-if="this.$route.params.type === 'about'">
      <h1>Сведения</h1>
      <p>Автор приложения: Каримов И.Р.</p>
      <p>ilfatkarimov123@gmail.com</p>
    </main>
  </div>
</template>

<script>
import SettingsNav from "../components/SettingsNav";
export default {
  name: "Settings",
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
      this.$store.commit("setTheme", this.theme);
      this.$store.commit("setLang", this.lang);
    }
  }
};
</script>

<style scoped>
.home {
  width: calc(100% - 70px);
  margin-left: 70px;
}
main {
  padding-top: 15px;
  padding-left: 15px;
  font-size: 1.4rem;
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
