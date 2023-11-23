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
import ReviewUser from '../views/ReviewUser.vue'
import Swaps from '../views/Swaps.vue'
import BestBooks from '../views/BestBooks.vue'
import Loans from '../views/Loans.vue'
import Notification from '../views/Notification.vue'

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
      path: '/profile/:id',
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
      path: '/book-detail/:id',
      name: 'book-detail',
      component: BookDetail
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Review
    },
    {
      path: '/reviewUser',
      name: 'reviewUser',
      component: ReviewUser
    },
    {
      path: '/swapsUser',
      name: 'swapsUser',
      component: Swaps
    },
    {
      path: '/bestbooks',
      name: 'bestbooks',
      component: BestBooks
    },
    {
      path: '/loans',
      name: 'loans',
      component: Loans
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    }
  ]
})

export default router
