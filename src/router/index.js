import Vue from 'vue'
import Router from 'vue-router'
import Catalogue from '../views/Catalogue'
import Product from '../views/Product'
import Findus from '../views/Findus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/products',
      name: 'start',
      component: Catalogue
    },
    {
      path: '/products/:slug',
      name: 'productInfo',
      component: Product
    },
    {
      path: '/findus',
      name: 'about',
      component: Findus
    },
    {
      path: '*',
      name: 'defaultRoute',
      redirect: '/products'
    }
  ],
  mode: 'history'
})
