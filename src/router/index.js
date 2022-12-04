import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login/Login.vue'
import Registration from '../views/Registration/Registration.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import Forgot from "../views/Forgot/Forgot.vue"
import ChangePassword from "../views/Change_Password/ChangePassword.vue"
import OldReport from "../views/Report/OldReport.vue"
import TodayReport from "../views/Report/TodayReport.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/old-report',
    name: 'OldReport',
    component: OldReport
  },
  {
    path: '/today-report',
    name: 'TodayReport',
    component: TodayReport
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
