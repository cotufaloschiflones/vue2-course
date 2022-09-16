<template>
  <div>
    <button
      @mouseover="onMouseOver"
      @click="onClick"
    >
      Handling simple events
    </button>

    <h4>Key events</h4>
    <input
      type="text"
      @keypress="onKeyPress"
    >
    <input
      type="text"
      placeholder="Trigger on press enter"
      @keypress.enter="onKeyPress"
    >

    <h4>Using edge cases with modifiers</h4>
    <div>
      <button @click="clickButton1">
        Button1
        <button @click.stop="clickButton2">
          Button 2
        </button>
      </button>
    </div>

    <hr>

    <form @submit.prevent="onSubmit">
      <input type="text">
      <button type="submit">
        Enviar
      </button>
    </form>

    <hr>

    <button @click.once="onClickOnlyOnce">
      Clícame
    </button>
  </div>
</template>

<script>
export default {
  name:    'UserInteractionsView',
  methods: {
    onClick() {
      console.log('Hello!')
    },
    onMouseOver() {
      console.log('Mouse over')
    },
    onKeyPress({ key }) {
      console.log('Key pressed', key)
    },
    clickButton1() {
      console.log('Button 1')
    },
    clickButton2() {
      console.log('Button 2')
    },
    onSubmit() {
      console.log('Submit')
    },
    onClickOnlyOnce() {
      console.log('Click only once')
    },
  },
}
</script>
