<template>
  <li class="todo-list-item">
    <input
      v-model="completed"
      type="checkbox"
    >
    <input
      v-if="isEditing"
      v-model="todoText"
      type="text"
      @keyup.enter="isEditing = false"
      @blur="isEditing = false"
    >
    <span
      v-else
      :class="{ 'todo-list-item--completed': completed }"
      @dblclick="isEditing = true"
    >{{ todoText }}</span>

    <span
      class="todo-list-item--delete"
      @click="$emit('delete-todo', id)"
    >❌</span>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  data: () => ({
    isEditing: false,
    completed: false,
    id:        +new Date(),
    todoText:  'Aprender Vue'
  })
}
</script>

<style lang="scss" scoped>
.todo-list-item {
  &--delete {
    cursor: pointer;
  }
  &--completed {
    text-decoration: line-through;
  }
}
</style>