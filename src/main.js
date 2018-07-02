// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueSax from 'vuesax'
import 'vuesax/dist/vuesax.css' //vuesax styles
import Vue2TouchEvents from 'vue2-touch-events'
import App from './App'
import router from './router'
import store from './store'

import _ from 'lodash'

Vue.config.productionTip = false
Vue.use(VueSax)
Vue.use(Vue2TouchEvents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
