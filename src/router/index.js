import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue'),
      props: true
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/tags/:tag',
      name: 'tag',
      component: () => import('../views/TagView.vue'),
      props: true
    },
    {
      path: '/realtime',
      name: 'realtime',
      component: () => import('../views/RealTime.vue')
    }
  ]
})

export default router
