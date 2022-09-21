export default {
  install(Vue, options) {
    console.log('Vue-logger plugin installed', options)
    // método global o propiedad
    // podremos acceder desde el main para por ejemplo inicializar algún valor, siempre
    // después de que se haya instalado el plugin
    Vue.myGlobalMethod = () => {
      console.log('Hello from myGlobalMethod')
    }
    // método de instancia
    // podremos acceder desde cualquier parte de nuestra aplicación así de this.$log.info()
    Vue.prototype.$log = {
      info:  text => console.info(`%c ${text} `, 'background: #1776d4; color: #ffffff'),
      error: text => console.error(`%c ${text} `, `background: ${options.error}; color: #ffffff`),
      debug: text => console.log(`%c ${text} `, 'background: #57799b; color: #ffffff'),
      warn:  text => console.warn(`%c ${text} `, 'background: #d4c117; color: #333333')
    }
  }
}