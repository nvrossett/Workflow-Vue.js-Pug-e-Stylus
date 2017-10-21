import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Sobre from '@/components/Sobre'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/sobre',
      component: Sobre
    }
  ],
  mode: 'history',
  linkActiveClass: 'active-page',
  linkExactActiveClass: 'current-page'
})

router.beforeEach((to, from, next) => {
  // console.log(this)
  next()
})

router.beforeEach((to, from, next) => {
  // console.log(this)
  next()
})

export default router
