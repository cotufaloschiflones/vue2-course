<template>
  <li class="todo-list-item">
    <input
      v-model="completed"
      type="checkbox"
    >
    <input
      v-if="isEditing"
      v-model.trim="title"
      v-focus
      type="text"
      @keyup.enter="onUpdateTodo"
      @blur="onUpdateTodo"
    >
    <span
      v-else
      :class="{ 'todo-list-item--completed': completed }"
      @dblclick="isEditing = true"
    >{{ title }}</span>

    <span
      class="todo-list-item--delete"
      @click="$emit('delete:todo', todo.id)"
    >❌</span>
  </li>
</template>

<script>
export default {
  name:  'TodoListItem',
  props: {
    todo: { type: Object, required: true }
  },
  data: (vm) => ({
    isEditing: false,
    title:     vm.todo.title
  }),
  computed: {
    completed: {
      get() {
        return this.todo.completed
      },
      set(value) {
        console.log('set completed', value)
        this.$emit('update:todo', { ...this.todo, completed: value })
      }
    },
  },
  methods: {
    onUpdateTodo() {
      this.isEditing = false
      this.$emit('update:todo', { ...this.todo, title: this.title })
    }
  }
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