import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: "ru",
    city: "Kazan",
    units: "metric",
    data: {}
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
  },
  actions: {
    async fetchData({commit}) {
      const key = process.env.VUE_APP_FIXER;
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=${this.state.units}&lang=${this.state.language}&appid=${key}`
      );
      let data = await res.json()
      commit('setData', data);
      // return await res.json();
    }
  },
  getters: {
    data: s => s.data
  }
})
