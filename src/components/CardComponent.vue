<template>
  <div class="card">
    <div class="card--title">
      <slot name="title">
        <h1>Default title</h1>
      </slot>
    </div>

    <div class="card--content">
      <slot name="content">
        Default content
      </slot>
    </div>

    <div class="card--footer">
      <slot name="footer" />
    </div>

    <div class="card--actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent'
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 1rem;
  width: 300px;

  &--content {
    margin: 1rem 0;
  }
  &--footer {
    text-align: center;
  }
  &--actions {
    text-align: right;
  }
}
</style>