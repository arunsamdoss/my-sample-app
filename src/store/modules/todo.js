import axios from 'axios';

const state = {
    todos: [],
}

const getters = {
    allTodos: (state) => {
      return state.todos
    }
  }

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,
            { title: title, completed: false })

        commit('addTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    
        commit('removeTodo', id);
      },    
}

const mutations = {
    setTodos: (state, todos) => {
        return state.todos = todos
    },
    addTodo: (state, newTodo) => state.todos.unshift(newTodo),
    removeTodo:(state,id) => state.todos = state.todos.filter((todo) => todo.id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
}