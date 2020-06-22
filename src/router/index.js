import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kraken from '../views/Kraken.vue'
import HHwireless from '../views/HHwireless.vue'
import Viper from '../views/Viper.vue'
import Huntsman from '../views/Huntsman.vue'
import Ultrabook from '../views/Ultrabook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blade',
    name: 'Blade',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blade.vue')
  },
  {
    path: '/kraken',
    name: 'Kraken',
    component: Kraken
  },
  {
    path: '/hhwireless',
    name: 'HHwireless',
    component: HHwireless
  },
  {
    path: '/viper',
    name: 'Viper',
    component: Viper
  },
  {
    path: '/huntsman',
    name: 'Huntsman',
    component: Huntsman
  },
  {
    path: '/ultrabook',
    name: 'Ultrabook',
    component: Ultrabook
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
