import store from '@/store'

export default [
  {
    path:        '/',
    name:        'home',
    component:   () => import('@/views/HomeView'),
    beforeEnter: async (to, from, next) => {
      await store.dispatch('fetchTodos')
      next()
    },
  },
  {
    path:      '/rendering-declarativo',
    name:      'renderingDeclarative',
    component: () => import('@/views/RenderingDeclarativeView')
  },
  {
    path:      '/loops-and-conditionals',
    name:      'loopsAndConditionals',
    component: () => import('@/views/LoopsAndConditionalsView'),
  },
  {
    path:      '/user-interactions',
    name:      'userInteractions',
    component: () => import('@/views/UserInteractionsView')
  },
  {
    path:      '/methods-data-and-lifecycle',
    name:      'methodsDataAndLifecycle',
    component: () => import('@/views/LifecycleView')
  },
  {
    path:      '/watchers-and-computed-properties',
    name:      'watchersAndComputedProperties',
    component: () => import('@/views/WatchersAndComputedPropertiesView')
  },
  {
    path:      '/basic-directives',
    name:      'directivesView',
    component: () => import('@/views/DirectivesView')
  },
  {
    path:      '/components',
    name:      'componentsView',
    component: () => import('@/views/ComponentsView')
  },
  {
    path:      '/filters',
    name:      'filtersView',
    component: () => import('@/views/FiltersView')
  },
  {
    path:      '/plugins',
    name:      'pluginsView',
    component: () => import('@/views/PluginsView')
  },
]