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
    fetchTodos(context) {
      console.log(context)
      return todoService.index() // 'baseURl/todos'
        .then(response => {
          console.log(response)
          context.commit('setTodos', response)
        })
    }
  },
  getters: {
    /*
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed)
    },
    numberOfCompletedTodos(state, getters) {
      return getters.completedTodos.length
    }
    */
  },
})
