import Vue from 'vue'

const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
const camelCase = str => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}

const requireComponent = require.context(
  // La ruta relativa de la carpeta de componentes
  '@/components/global',
  // Si mirar o no en las subcarpetas
  false,
  // La expresión regular utilizada para hacer coincidir los nombres de los componentes básicos de los ficheros
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Obtener la configuración de los componentes
  const componentConfig = requireComponent(fileName)

  // Obtener el nombre PascalCase del componente
  const componentName = upperFirst(
    camelCase(
      // Quitar el `./`en el comienzo y la extensión del nombre del archivo
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Registrar el componente a nivel global
  Vue.component(
    componentName,
    // Busca las opciones de componentes en `.default`, que
    // existen si el componente fue exportado con `export default`,
    // de lo contrario volver a la raíz del módulo.
    componentConfig.default || componentConfig
  )
})
