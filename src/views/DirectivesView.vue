<template>
  <div>
    <div>
      <h4>v-model</h4>
      <input
        v-model="message"
        type="text"
      >
      <p>El v-model es una directiva (sugar syntax) que pasa el value al componente y recoge el evento de cambio de valor y lo actualiza en el componente padre. Para ver como funciona podríamos hacerlo de la siguiente manera de forma manual.</p>
      <input
        :value="message"

        type="text"
        @input="message = $event.target.value"
      >
    </div>

    <div>
      <h4>v-text</h4>
      <p v-text="message" />
      <p>El v-text inyecta contenido de texto en la etiqueta en la que se use</p>
    </div>

    <div>
      <h4>v-html</h4>
      <!-- <p v-html="message" /> -->
      <p>El v-html inyecta contenido HTML en la etiqueta en la que se use</p>
    </div>

    <div>
      <h4>v-show</h4>
      <button @click="show = !show">
        Toggle
      </button>
      <p v-show="show">
        hello
      </p>
      <p>El v-show se diferencia del v-if en que a pesar de tener la evaluacion como false, el elemento si que esxiste en el DOM pero tendrá un display none. Con el v-if directamente si es false, no existirá en el DOM.</p>
    </div>

    <div>
      <h4>v-on @event</h4>
      <router-link :to="{ name: 'userInteractions' }">
        Como hemos visto en la sección 1.3
      </router-link>
    </div>

    <div>
      <h4>v-bind</h4>
      <input v-bind="attrsMyInput">
    </div>

    <div>
      <h4>v-slot</h4>
      <card-component>
        <!-- v-slot:card--title -->
        <template #title>
          <h2>Suscríbete a nuestro canal</h2>
        </template>

        <template #content>
          Podrás disfrutar de inumerables videos super guays
        </template>

        <template #actions>
          <button @click="onClick">
            Subscribirme
          </button>
        </template>
      </card-component>

      <p>Los slots nos permitirán crear componentes muy flexibles y dinámicos, para usar así en diferentes partes de nuestra aplicación.</p>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent'

export default {
  name:       'DirectivesView',
  components: {
    CardComponent
  },
  data: () => ({
    show:         false,
    message:      'Hello Vue!',
    htmlMessage:  '<h1>Vue</h1>',
    attrsMyInput: {
      id:    'myInput',
      name:  'myInput',
      value: 'myInput',
      type:  'text'
    }
  }),
  methods: {
    onClick() {
      console.log('Perfecto! Te has suscrito, habrás recibido un email.')
    }
  }
}
</script>
