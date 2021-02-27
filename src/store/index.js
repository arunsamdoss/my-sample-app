import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  //   form: [{
  //     email: 'sam@gmail.com',
  //     password: '123456'
  //   },
  //   {
  //     email: 'arun@gmail.com',
  //     password: '123456'
  //   }
  // ],
  todo: []
  },
  getters: {
    allTodos: (state) => {
      return state.todos
    }
  },
   actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  
      commit('setTodos', response.data);
    }
  },
  mutations: {
      setTodos: (state, todos) => (state.todos = todos)
  }
})
