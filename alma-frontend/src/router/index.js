import Vue from 'vue'
import VueRouter from 'vue-router'
import Onboarding from '../views/Onboarding.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Onboarding',
    component: Onboarding
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/test/redesign',
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
