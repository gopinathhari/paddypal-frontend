 /*jshint esversion: 6 */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as VueGoogleMaps from "vue2-google-maps"




Vue.use(Vuetify, { theme: {
  primary: '#D4E157',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}});
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAQF8f2TPEQ1B3Aox-Pn_D3DThOzuqJw7Q",
    libraries: "places" // necessary for places input
  }
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
