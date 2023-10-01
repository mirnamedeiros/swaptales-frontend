import { createRouter, createWebHistory } from 'vue-router'
import ViewBooks from '../views/ViewBooks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewBooks
    },
    {
      path: '/add',
      name: 'add',
      component: () => import ('../views/AddBook.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import ('../views/UpdateBook.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import ('../views/UserProfile.vue')
    }
  ]
})

export default router
