import Vue from 'vue'
import VueRouter from 'vue-router'
import Onboarding from '../views/Onboarding.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Onboarding',
    component: Onboarding
  },
  // {
  //   path: '/dashboard',
  //   name: 'CenterList',
  //   component: import('@/views/CenterList.vue')
  // },

  {
    path: '/dashboard',
    name: 'CenterList',
    component: () => import('@/views/CenterList.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
