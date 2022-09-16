<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">
        Home
      </router-link>
      <router-link :to="{ name: 'renderingDeclarative' }">
        1.1. Renderización Declarativa
      </router-link>

      <router-link :to="{ name: 'loopsAndConditionals' }">
        1.2. Condicionales y Bucles
      </router-link>

      <router-link :to="{ name: 'userInteractions' }">
        1.3.  Manejando Interacciones del Usuario
      </router-link>

      <router-link :to="{ name: 'methodsDataAndLifecycle' }">
        2.1. Métodos y objeto Data / Lifecycle
      </router-link>

      <router-link :to="{ name: 'watchersAndComputedProperties' }">
        3.1. Watchers y Propiedades Computadas
      </router-link>

      <router-link :to="{ name: 'directivesView' }">
        4.1. Directivas básicas
      </router-link>
    </nav>

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
