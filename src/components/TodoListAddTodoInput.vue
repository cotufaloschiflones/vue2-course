<template>
  <div>
    <input
      v-model="newTodoText"
      type="text"
      placeholder="Añade tu nueva tarea"
      @keyup.enter="onAddTodo"
    >
  </div>
</template>

<script>
export default {
  name: 'TodoListAddTodoInput',
  data: () => ({
    newTodoText: ''
  }),
  methods: {
    onAddTodo() {
      this.$emit('add:todo', {
        title:     this.newTodoText,
        completed: false,
        id:        +new Date()
      })
      this.newTodoText = ''
    }
  }
}
</script>
