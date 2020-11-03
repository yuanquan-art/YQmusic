import Vue from 'vue'
import VueRouter from 'vue-router'
import { component } from 'vue/types/umd'
import Login from '../components/Login/Login.vue'
// import Home from '../components/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
     {
       path: '/',
       redirect: '/home'
     },
     {
       path: '/login',
       component: Login
     },
     {
       path: '/home',
       component: component => ('../components/Home/Home.vue')
        
     }
]

const router = new VueRouter({
  routes
})

export default router
