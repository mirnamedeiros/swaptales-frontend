import { createRouter, createWebHistory } from 'vue-router'
import ViewBooks from '../views/ViewBooks.vue'
import AddBook from '../views/AddBook.vue'
import UpdateBook from '../views/UpdateBook.vue'
import UserProfile from '../views/UserProfile.vue'
import AddUser from '../views/AddUser.vue'
import Login from '../views/Login.vue'
import EditUser from '../views/EditUser.vue'
import BookDetail from '../views/BookDetail.vue'
import Review from '../views/Review.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/books',
      name: 'books',
      component: ViewBooks
    },
    {
      path: '/add',
      name: 'add',
      component: AddBook
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: UpdateBook
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile
    },
    {
      path: '/register',
      name: 'register',
      component: AddUser
    },
    {
      path: '/editUser',
      name: 'editUser',
      component: EditUser
    },
    {
      path: '/book-detail',
      name: 'book-detail',
      component: BookDetail
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Review
    },
  ]
})

export default router
