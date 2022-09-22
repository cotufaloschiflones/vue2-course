<template>
  <div class="todolist">
    <h4>My TodoList App</h4>
    <todo-list-add-todo-input @add:todo="addTodo($event)" />

    <todo-list-container-items
      :todos="activeTodos"
      @update:todo="updateTodo($event)"
      @delete:todo="deleteTodo($event)"
    />

    <todo-list-filters
      :filters="filters"
      :total-items="activeTodos.length"
      :active-filter="activeFilter"
      @update:filter="activeFilter = $event"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import TodoListAddTodoInput from '@/components/TodoListAddTodoInput'
import TodoListContainerItems from '@/components/TodoListContainerItems'
import TodoListFilters from '@/components/TodoListFilters'

export default {
  name:       'TodoList',
  components: {
    TodoListAddTodoInput,
    TodoListContainerItems,
    TodoListFilters
  },
  data: () => ({
    activeFilter: 'all',
    filters:      ['all', 'completed', 'pending'],
  }),
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['completedTodos', 'pendingTodos']),
    activeTodos() {
      if (this.activeFilter === 'completed') return this.completedTodos
      if (this.activeFilter === 'pending') return this.pendingTodos
      return this.todos
    }
  },
  methods: {
    ...mapActions(['addTodo', 'deleteTodo', 'updateTodo']),
  }
}
</script>

<style lang="scss" scoped>
.todolist {
  background-color: rgb(160, 240, 243);
  padding: 1rem;
  border-radius: 5px;
}
</style>