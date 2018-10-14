import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from "./store/store"
import axios from 'axios'

axios.defaults.baseURL = 'https://vuejs-stock-trader-d1eb5.firebaseio.com'
// axios.defaults.headers.common['Authorization']= ''
// axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config=> {
  return config
})
const resInterceptor = axios.interceptors.response.use(res=> {
  return res
})

Vue.use(VueRouter);

Vue.filter('currency',(value)=>{
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
