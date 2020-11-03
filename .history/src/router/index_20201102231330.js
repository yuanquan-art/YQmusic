import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
     {
       path: '/',
       redirect: '/home'
     },
     {
       path: '/login',
       component: () => import('../components/Login/Login.vue') 
     },
     {
       path: '/home',
       component: () => import('../components/Home/Home.vue')
     }
]

const router = new VueRouter({
  routes
})

export default router
