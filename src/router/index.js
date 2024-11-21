import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCoffeeView from '@/views/AddCoffeeView.vue'
import UpdateCoffeeView from '@/views/UpdateCoffeeView.vue'
import CoffeeDetailsView from '@/views/CoffeeDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add-coffee',
      name: 'AddCoffeeView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddCoffeeView,
    },
    {
      path: '/update-coffee',
      name: 'UpdateCoffeeView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UpdateCoffeeView,
    },
    {
      path: '/details-coffee',
      name: 'CoffeeDetailsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CoffeeDetailsView,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Errorpage',
      component: () => import('../components/Errorpage.vue'),
    },
  ],
})

export default router
