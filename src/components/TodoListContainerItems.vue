<template>
  <ul>
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete:todo="$emit('delete:todo', $event)"
      @update:todo="$emit('update:todo', $event)"
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
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>