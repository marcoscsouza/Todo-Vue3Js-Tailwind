import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    todos:[]
  },
  mutations: {
    storeTodos(state, payload){
      state.todos = payload
    },
    storeTodo(state, payload){
      const index = state.todos.findIndex(t => t.id ===payload.id)

      if(index >= 0){
        state.todos.splice(index, 1, payload)

      }else{
        state.todos.push(payload)

      }
      console.log('index - ',index)

    },
    deleteTodo(state, id){
      const index = state.todos.findIndex(t => t.id ===id)
      if(index >=0){
        state.todos.splice(index, 1)

      }

    }
  },
  getters: {
  },
  actions: {
    getTodos({commit}){
      return new Promise((resolve)=> {
        setTimeout(() => {
          return axios.get('http://localhost:3000/todos')
          .then((response) => {
            console.log(response.data)
            commit('storeTodos', response.data)
            resolve()
          })
        },1000)
      })
    },
    
    addTodo({commit}, data){
      return axios.post('http://localhost:3000/todos', data).then((response) => {
        commit('storeTodo',response.data)
      })
    },
    updateTodo({commit}, {id,data}){
      return axios.put(`http://localhost:3000/todos/${id}`, data).then((response) => {
        commit('storeTodo', response.data)
      })
    },
    deleteTodo({commit}, id){
      return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        commit('deleteTodo', id)
      })
    }
  },
  modules: {
  }
})
