<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">
        Todo App Excersise
      </router-link>
      <router-link :to="{ name: 'renderingDeclarative' }">
        1. Renderización Declarativa
      </router-link>

      <router-link :to="{ name: 'loopsAndConditionals' }">
        2. Condicionales y Bucles
      </router-link>

      <router-link :to="{ name: 'userInteractions' }">
        3.  Manejando Interacciones del Usuario
      </router-link>

      <router-link :to="{ name: 'methodsDataAndLifecycle' }">
        4. Métodos y objeto Data / Vue Lifecycle
      </router-link>

      <router-link :to="{ name: 'watchersAndComputedProperties' }">
        5. Watchers y Propiedades Computadas
      </router-link>

      <router-link :to="{ name: 'directivesView' }">
        6. Directivas
      </router-link>

      <router-link :to="{ name: 'componentsView' }">
        7. Componentes
      </router-link>

      <router-link :to="{ name: 'filtersView' }">
        8. Filtros
      </router-link>

      <router-link :to="{ name: 'pluginsView' }">
        9. Plugins
      </router-link>
    </nav>

    <!--
      Dentro del componente router-view (es un componente que nos
      facilita el plugin vue-router) se inyectarán las vistas definidas
      en el archivo router/index.js
    -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  nav {
    padding: 30px;
    display: block;

    a {
      font-weight: bold;
      color: #2c3e50;
      display: block;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

</style>
