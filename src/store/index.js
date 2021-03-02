import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
  todos: [],
  },
   actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  
      commit('setTodos', response.data);
    },
    async addTodo({commit},title){
      const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,
      {title:title,completed:false})

      commit('addTodo',response.data)
  }
  },

  mutations: {
    setTodos: (state, todos) =>{
       return state.todos = todos
  },
  addTodo:(state,newTodo) => state.todos.unshift(newTodo)

}
})
