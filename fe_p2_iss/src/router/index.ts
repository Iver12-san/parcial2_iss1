import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/niveles-academicos',
      name: 'niveles-academicos',
      component: () => import('../views/Nivel-AcademicoView.vue'),
    },
    {
      path: '/programas',
      name: 'programas',
      component: () => import('../views/ProgramaView.vue'),
    },
  ],
})

export default router
