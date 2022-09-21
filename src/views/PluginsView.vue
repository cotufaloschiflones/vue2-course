<template>
  <div>
    Plugins

    <p />
  </div>
</template>

<script>
export default {
  name: 'PluginsView',
  mounted() {
    this.$log.debug('debug como método de instancia')
    this.$log.error('error como método de instancia')
    this.$log.warn('warn como método de instancia')
    this.$log.info('info como método de instancia')

    console.log(this.myGlobalMethod)
    /*
    setTimeout(() => {
      this.$router.push({ name: 'directivesView' })
    }, 5000)
    */
  },
}
</script>

<style lang="scss" scoped>

</style>