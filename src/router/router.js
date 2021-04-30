import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main'

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
  ]
});

export default router;
