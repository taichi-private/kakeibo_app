import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home'
import login from '../components/login'
import signup from '../components/signup'
import test from '../components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/signup',
      component: signup
    },
    {
      path: '/test',
      component: test
    }
  ]
})