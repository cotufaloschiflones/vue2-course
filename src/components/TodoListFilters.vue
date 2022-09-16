<template>
  <div class="todo-list-filters">
    <div class="todo-list-filters--remaining-todos">
      1/2
    </div>

    <ul class="todo-list-filters--navigation">
      <li>Todos</li>
      <li>Pendientes</li>
      <li>Completados</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoListFilters',
  data: () => ({
    active: false
  })
}
</script>

<style lang="scss" scoped>
.todo-list-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--remaining-todos {
    font-size: 1.2rem;
    font-weight: bold;
  }
  &--navigation {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    li {
      margin: 0 12px;
      cursor: pointer;
    }
  }
}
</style>