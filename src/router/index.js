import Vue from '../../node_modules/vue'
import Router from '../../node_modules/vue-router'
import firebase from '../firebase.js'
import About from '../pages/About'
import Service from '../pages/Services'
import Signin from '../pages/Signin'

Vue.use(Router)

const AuthGuard = (to, from, next) => {
  if (firebase.auth().currentUser) {
    next()
  } else {
    next('/signin/')
  }
}

// export default router
export default new Router({
  routes: [
    {
      path: '/about/',
      name: 'About',
      component: About,
      beforeEnter: AuthGuard
    },
    {
      path: '/service/',
      name: 'Services',
      component: Service,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/',
      name: 'Signin',
      component: Signin
    }

  ],
  mode: 'history'
})
