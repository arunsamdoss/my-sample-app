import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '../router/index.js'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    todos: [],
    idToken: null,
    userId: null,
    user: null,
  },
  getters: {
    allAccounts: state => {
      return state.allAccount;
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

      commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
      const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,
        { title: title, completed: false })

      commit('addTodo', response.data)
    },
    signup({ commit }, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAv71t6_6YOyOdpbkmsvqtE2i68uhL3U1g', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          router.push("/edit")
        })
        .catch(error => console.log(error))
    },
    login({ commit }, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAv71t6_6YOyOdpbkmsvqtE2i68uhL3U1g', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          router.push("/dashboard")
        })
        .catch(error => console.log(error))
    },
    logout({ commit }) {
      commit('clearAuth')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/')
    }
  },

  mutations: {
    setTodos: (state, todos) => {
      return state.todos = todos
    },
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    clearAuth(state) {
      state.idToken = null
      state.userId = null
    },
    addTodo: (state, newTodo) => state.todos.unshift(newTodo)


  }
})
