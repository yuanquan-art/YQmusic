import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './plugins/element.js'
import './assets/css/iconfont.css'


import axios from 'axios'
axios.defaults.baseURL = 'https://autumnfish.cn/'
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
