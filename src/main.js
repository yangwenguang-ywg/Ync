import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
// 引入rem
import 'amfe-flexible'
// vant 
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import axios from "./utils/hh"
Vue.prototype.$http = axios

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)};


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
