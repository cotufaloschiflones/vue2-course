<template>
  <div>
    <p>Hola, soy HTML convencional y yo {{ message }}</p>
    <div>
      <input
        v-model="message"
        type="text"
      >
    </div>

    <small>Para utilizar rendertización declarativa en Vue, se debe usar el moustache syntax <code>&lbrace;&lbrace;&rbrace;&rbrace;</code> y dentro lo que se vaya a evaluar/pintar de forma dinámica</small>
  </div>
</template>

<script>
export default {
  name: 'RenderingDeclarativeView',
  data: () => ({
    message: 'soy un extracto declarativo'
  })
}
</script>
