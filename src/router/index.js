import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import SigninPage from '../components/auth/signin.vue'
import SignupPage from '../components/auth/signup.vue'
// import store from "../store"

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/");
// };

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/signin");
// }

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
    component: SigninPage,
    // beforeEnter: ifNotAuthenticated
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    // beforeEnter: ifAuthenticated
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
