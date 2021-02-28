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
  todos: []
  },
   actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  
      commit('setTodos', response.data);
      console.log(response.data)
    }
  },
  mutations: {
    setTodos: (state, todos) =>{
       console.log(todos)
       return state.todos = todos
  }
}
})
