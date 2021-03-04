import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import SigninPage from '../components/auth/signin.vue'
import SignupPage from '../components/auth/signup.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/signup',
    component: SignupPage
  },

  {
    path: '/signin',
    component: SigninPage
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
