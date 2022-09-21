<template>
  <input
    v-focus
    type="text"
    placeholder="Busca aquí tu producto"
  >
</template>

<script>
export default {
  name: 'SearchInputComponent',
  /*
  // también se pueden registrar de forma local
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }, */
}
</script>
