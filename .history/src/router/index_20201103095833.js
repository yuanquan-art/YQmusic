import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
     {
       path: '/',
       redirect: '/home1'
     },
     {
       path: '/login',
       component: ()=>import('../components/Login/Login.vue')
     },
     {
      path: '/home1',
      component: ()=>import('../components/Home/Home1.vue')
     },
     {
       path: '/home',
       component: ()=>import('../components/Home/Home.vue'),
       redirect: '/discoverMusic',
       children: [
         {
             path: '/discoverMusic',
             component: ()=>import('../components/Home/discoverMusic/DiscoverMusic.vue')
         },
         {
             path: '/video',
             component: ()=>import('../components/Home/video/Video.vue')
         }
       ]   
     }
]

const router = new VueRouter({
  routes
})

export default router
