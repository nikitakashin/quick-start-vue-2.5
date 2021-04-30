import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import vuetify from './plugins/vuetify'

Vue.use({ 
  store: store,
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  vuetify
})

