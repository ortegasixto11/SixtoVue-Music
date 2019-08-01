import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import {firestorePlugin} from 'vuefire'

import 'bootstrap'  
import 'bootstrap/dist/css/bootstrap.min.css'

import routes from './config/routes'

Vue.use(VueRouter)
Vue.use(firestorePlugin)

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
