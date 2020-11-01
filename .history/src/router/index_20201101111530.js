import Vue from 'vue'
import VueRouter from 'vue-router'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
     {
       path: '/',
       redirect: '/login'
     },
     {
       path: '/login',
       component: () => import(../components/) 
     }
]

const router = new VueRouter({
  routes
})

export default router
