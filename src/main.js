require('./assets/css/common.css');
require('./assets/css/animate.css');

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  linkActiveClass:'custom-active-class'
});
require('./routers')(router);
router.start(App, '#app')
