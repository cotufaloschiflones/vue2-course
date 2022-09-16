<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'MethodsAndDataView',
  /*
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  */
  // component base state, this variables are setted every time that the component is created
  data: () => ({
    message: 'Hello Vue!'
  }),
  created() {
    console.log('created', this.$el)
  },
  beforeMount() {
    console.log('beforeMount', this.$el)
  },
  mounted() {
    console.log('mounted', this.$el)
    setTimeout(() => {
      this.reverseMessage()
    }, 5000)
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.$el)
  },
  updated() {
    console.log('updated', this.$el)
  },
  beforeDestroy() {
    console.log('beforeDestroy', this.$el)
  },
  destroyed() {
    console.log('destroyed', this.$el)
  },

  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  },
}
</script>
