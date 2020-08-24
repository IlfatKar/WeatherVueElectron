import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 'ru',
    city: 'Kazan',
    units: 'metric',
    data: {},
    error: null,
    theme: "white"
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setCity(state, data) {
      state.city = data;
    },
    setError(state, data) {
      state.error = data;
    },
    setTheme(state, data){
      state.theme = data
    },
    setLang(state, data){
      state.lang = data
    }
  },
  actions: {
    async fetchData({commit}) {
      const key = process.env.VUE_APP_FIXER
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=${this.state.units}&lang=${this.state.lang}&appid=${key}`
      )
      let data = await res.json()
      commit('setData', data)
    },
    async addFeedbackItem({}, {name, email, text}) {
      await firebase.database().ref(`/messages/${name}/`)
        .push({email, text})
    }
  },
  getters: {
    data: s => s.data,
    error: s => s.error,
    lang: s => s.lang,
    theme: s => s.theme,
    city: s => s.city
  }
});
