<template>
  <div class="todo-list-filters">
    <div class="todo-list-filters--total-todos">
      Items: {{ totalItems }}
    </div>

    <ul class="todo-list-filters--navigation">
      <li
        v-for="(filter, key) in filters"
        :key="key"
        :class="{ active: filter === activeFilter }"
        @click="$emit('update:filter', filter)"
      >
        {{ filter }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:  'TodoListFilters',
  props: {
    totalItems:   { type: Number, required: true },
    filters:      { type: Array,  required: true },
    activeFilter: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.todo-list-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--total-todos {
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
      padding: 4px 6px;
      border: 1px solid rgba(0, 0, 0, 0.1);

      &.active {
        font-weight: bold;
        border: 1px solid #000;
      }
    }
  }
}
</style>