import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LoginView,
      name: 'login'
    },
    {
      path: '/dashboard',
      component: DashboardView,
      name: 'dashboard'
    }
  ]
})

export default router
