// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import { sync } from 'vuex-router-sync'
import VueYouTubeEmbed from 'vue-youtube-embed'

import router from './router'
import store from './store/store'

import './plugins/vuetify'
import './plugins/toasted'

import App from './App'

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed, { global: false })

sync(store, router)

router.beforeEach((from, to, next) => {
  Promise.all([store.dispatch('checkAuth')]).then(next)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
