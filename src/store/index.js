import Vue from 'vue'
import Vuex from 'vuex'
import { todoService } from '@/services/'

Vue.use(Vuex)

export default new Vuex.Store({
  // el state refleja el estado de la aplicación y lo iremos actualizando
  // vía mutations según nos interese (nevegar a una ruta, despues de eliminar un todo, etc)
  state: {
    todos: []
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos
    }
  },
  // en las actions de vue hablaremos con la api y las llamaremos desde las rutas (en ocasiones vistas) para hacer
  // el fetch de los datos y su posterior actualización en el state a través de las mutations
  actions: {
    // las acciones reciben un objeto context que tiene el
    // state
    // getters
    // commit: un método para llamar a una mutación
    // dispatch: un método para llamar a otra acción
    async fetchTodos(context) {
      const todos = await todoService.index()
      context.commit('setTodos', todos)
    },
    // las acciones además del primer parámetro que es el context,
    // tiene un segundo parámetro que es el payload que le pasamos a la acción
    async updateTodo(context, todo) {
      await todoService.update(todo)
      context.dispatch('fetchTodos')
    },
    async deleteTodo(context, todoId) {
      await todoService.delete(todoId)
      context.dispatch('fetchTodos')
    },
    async addTodo(context, todo) {
      await todoService.create(todo)
      context.dispatch('fetchTodos')
    }
  },
  getters: {
    // los getters son como las computed properties de vue
    // pero en vez de devolver un valor, devuelven una función
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed)
    },
    pendingTodos(state) {
      return state.todos.filter(todo => !todo.completed)
    },
    // un getter puede además recibir parámetros, de esta forma
    isTodosCompleted: (state) => (completed) => {
      return state.todos.filter(todo => todo.completed === completed)
    }
  },
})
