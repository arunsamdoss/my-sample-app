import axios from 'axios';
import router from '@/router/index.js'

const state = { 
    idToken: localStorage.getItem("user-token") || '',
    userId: null,
    user: null,
}
const getters = {
    isAuthenticated: state => !!state.idToken,
    authStatus: state => state.userId
  }

const actions = {
    signup({ commit }, authData) {
        axios.post('http://localhost:8000/auth/register', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
          .then(res => {
            console.log(res)
            localStorage.setItem("user-token", res.idtoken)
            commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId
            })
            router.replace('/edit')
          })
          .catch(error => console.log(error))
      },
      login({ commit }, authData) {
        axios.post('http://localhost:8000/auth/login', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
          .then(res => {
            console.log(res)
            commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId
            })
            router.replace('/edit')
          })
          .catch(error => console.log(error))
      },
      logout({ commit }) {
        commit('clearAuth')
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        router.replace('/')
      }
}
const mutations = {
    
    authUser(state, userData) {
        state.idToken = userData.token
        state.userId = userData.userId
      },
      clearAuth(state) {
        state.idToken = null
        state.userId = null
      }
}


export default {
    state,
    getters,
    actions,
    mutations
  }