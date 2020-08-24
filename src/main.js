import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faHome,
  faMapMarked,
  faCog,
  faComment,
  faDoorOpen
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import Vuelidate from 'vuelidate'
import firebase from 'firebase/app'
import 'firebase/database'
import localizeFilter from './filters/localize.filter'


library.add(faBars, faHome, faMapMarked, faCog, faComment, faDoorOpen)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)

Vue.use(Vuelidate)


firebase.initializeApp({
  apiKey: 'AIzaSyAt936E7a3mU47WeLooLjWL9kZrzzReXvU',
  authDomain: 'weatherfeedback-f1e44.firebaseapp.com',
  databaseURL: 'https://weatherfeedback-f1e44.firebaseio.com',
  projectId: 'weatherfeedback-f1e44',
  storageBucket: 'weatherfeedback-f1e44.appspot.com',
  messagingSenderId: '674614550878',
  appId: '1:674614550878:web:3e398c830485c009862fcf'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
