<template>
  <div>
    <h6>Hola soy un componente con propiedades</h6>
    <p>*{{ mandatoryProp }}</p>
    <div>
      <!--
        Vue por defecto inyecta los atributos del componente en el elemento raíz
        en caso de querer inyectar esos atributos en otro elemento se debe usar
        v-bind="$attrs" en el elemento que se desea inyectar además de usar en la
        instancia de vue el atributo inheritAttrs: false para que no inyecte los
        atributos en el elemento raíz
      -->
      <p>{{ stringProp }}</p>
      <p>{{ numericProp }}</p>
      <button @click="fnProp">
        Ejecuto un callback desde el padre
      </button>
      <p>{{ arrayProp }}</p>
      <p>{{ objectProp }}</p>
      <button
        v-if="enabledCounter"
        @click="$emit('increment')"
      >
        Ejemplo de propsDown -> eventsUp
      </button>
      <p :class="[alertType]">
        {{ booleanProp }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:  'ComponentWithProps',
  // inheritAttrs: false,
  props: {
    stringProp:     { type: String, default: null },
    numericProp:    { type: Number, default: null },
    fnProp:         { type: Function, default: () => {} },
    arrayProp:      { type: Array, default: null },
    objectProp:     { type: Object, default: null },
    booleanProp:    { type: Boolean, default: false },
    enabledCounter: { type: Boolean, default: false },
    alertType:      {
      validator: value => {
        // El valor debe coincidir con una de estas cadenas de texto
        return ['error', 'success', 'warning', 'info'].indexOf(value) !== -1
      },
      default: null
    },
    mandatoryProp: { type: String, default: null, required: true }
  },
  mounted() {
    // la instancia de vue tendrá acceso a los attrs y props recibidos
    // asñi los tendréis dusponibles en caso de querer usarlos
    console.log(this.$attrs, this.$props)
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
.success {
  color: green;
}
.warning {
  color: yellow;
}
.info {
  color: blue;
}
</style>