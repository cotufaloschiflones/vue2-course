import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:      '/',
    name:      'home',
    component: () => import('@/views/HomeView')
  },
  {
    path:      '/rendering-declarativo',
    name:      'renderingDeclarative',
    component: () => import('@/views/RenderingDeclarativeView')
  },
  {
    path:      '/loops-and-conditionals',
    name:      'loopsAndConditionals',
    component: () => import('@/views/LoopsAndConditionalsView')
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
