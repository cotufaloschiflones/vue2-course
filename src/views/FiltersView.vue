<template>
  <div>
    <h4>Filtros</h4>
    <p>Los filtros en vue se utilizan para formatear datos a la hora de displayearlos tan solo, sin modificar el dato de entrada</p>
    <p>Así mismo los filtros se pueden encadenar y aplicar diferentes filtros sobre el valor que se va heredando desde el primero hasta el siguiente</p>
    <p>Str Original: {{ message }}</p>
    <p>Str filtrado: {{ message | capitalize }}</p>
    <p>Str filtrado: {{ message | uppercase }}</p>
    <p>Str filtrado: {{ 'dos mil' | uppercase | currency }}</p>
  </div>
</template>

<script>
export default {
  name: 'FiltersView',
  // declarar filtros de forma local
  /*
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    uppercase(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
    currency(value) {
      if (!value) return ''
      value = value.toString()
      return `${value} €`
    },
  },
  */
  data: () => ({
    message: 'hello vue!',
  }),
}
</script>
