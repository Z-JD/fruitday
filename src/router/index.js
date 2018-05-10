import Vue from 'vue'
import Router from 'vue-router'
import classification from 'components/classification/classification'
import shopcart from 'components/shopcart/shopcart'
import orchard from 'components/orchard/orchard'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/App'
  },
  {
    path: '/classification',
    component: classification
  },
  {
    path: '/shopcart',
    component: shopcart
  },
  {
    path: '/orchard',
    component: orchard
  }
]

export default new Router({
  linkActiveClass: 'active',
  routes
})
