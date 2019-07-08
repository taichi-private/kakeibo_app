import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home'
import mypage from '../components/mypage/top'
import mypageIncome from '../components/mypage/income'
import signin from '../components/signin'
import signup from '../components/signup'
import test from '../components/test'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/mypage',
      component: mypage,
      meta: { requiresAuth: true }
    },
    {
      path: '/mypage/income',
      component: mypageIncome,
      meta: { requiresAuth: true }
    },
    {
      path: '/signin',
      component: signin
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router