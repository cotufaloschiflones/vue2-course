<template>
  <ul>
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="onDeleteTodo"
    />
  </ul>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'

export default {
  name:       'TodoListContainerItems',
  components: {
    TodoListItem
  },
  props: {
    todos: { type: Array, required: true }
  },
  methods: {
    onDeleteTodo(id) {
      console.log('delete todo en el padre', id)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>