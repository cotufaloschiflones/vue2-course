<template>
  <div class="todolist">
    <h4>My TodoList App</h4>
    <todo-list-add-todo-input />

    <todo-list-container-items :todos="todos" />

    <todo-list-filters />
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
  computed: {
    ...mapState(['todos'])
  }
  /* methods: {
    ...mapActions(['fetchTodos'])
  }, */
}
</script>

<style lang="scss" scoped>
.todolist {
  background-color: rgb(160, 240, 243);
  padding: 1rem;
  border-radius: 5px;
}
</style>