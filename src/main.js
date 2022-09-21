import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { capitalize, uppercase, currency } from '@/filters/index'
// REGISTRO GLOBAL DE COMPONENTES
// esto nos permite utilizarlos en toda la aplicación sin tener que registrarlo localmente en el archivo vue que lo vaya a utilizar

// 1. registro global de componentes de forma dinámica usando webpack
import '@/utils/dynamicComponentRegistration'
// 2. registro global de componentes de forma directa/manual
// import DummyComponent from '@/components/DummyComponent'
// Vue.component('DummyComponent', DummyComponent)

// Cargamos los estilos globales
import '@/styles/index.scss'

import VueLogger from '@/plugins/vue-logger'
Vue.use(VueLogger, { error: '#fd0000' })
Vue.myGlobalMethod()

Vue.config.productionTip = false

// registro global de filtros, se puee hacer también de forma dinámica al igual que los componentes
Vue.filter('capitalize', capitalize)
Vue.filter('uppercase', uppercase)
Vue.filter('currency', currency)

// registro global de directivas, lo bueno de registrarlas globalmente es que las puedes reutilizar en cualquier componente
// puede haber casos en los que necesite un acceso al bajo nivel al DOM en elementos simples, y aquí es donde las directivas
// personalizadas seguirían siendo útiles
Vue.directive('focus', {
  inserted: el => el.focus()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
