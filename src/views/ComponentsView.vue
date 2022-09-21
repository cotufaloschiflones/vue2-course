<template>
  <div class="components-view">
    <h4>Carga de componentes dinámicos</h4>
    <button @click="changeComponent('DummyComponent')">
      DummyComponent
    </button>
    <button @click="changeComponent('CardComponent')">
      CardComponent
    </button>
    <div>
      <component :is="currentComponent" />
    </div>

    <h4>Pasando props a un componente</h4>
    <component-with-props
      data-cy="component-with-props"
      string-prop="Valor de nuestro counter"
      :numeric-prop="counter"
      :fn-prop="myCustomCallback"
      :array-prop="[1, 2, 3]"
      :object-prop="{ a: 1, b: 2 }"
      :boolean-prop="true"
      enabled-counter
      alert-type="error"
      mandatory-prop="Hola soy una propiedad obligatoria"
      @increment="counter++"
    />
  </div>
</template>

<script>
import DummyComponent from '@/components/DummyComponent'
import CardComponent from '@/components/CardComponent'
import ComponentWithProps from '@/components/ComponentWithProps'

export default {
  name:       'ComponentsView',
  // registro local de componentes
  components: {
    DummyComponent,
    CardComponent,
    ComponentWithProps
  },
  data: () => ({
    counter:          0,
    currentComponent: 'DummyComponent',
  }),
  methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName
    },
    myCustomCallback() {
      console.log('myCustomCallback')
      this.counter++
    }
  },
}
</script>

<style lang="scss" scoped>
.components-view {
  background-color: rgba(0, 0, 255, 0.3);
  padding: 16px;
  border-radius: 6px;
}

h4 {
  font-size: 20px;
}
</style>