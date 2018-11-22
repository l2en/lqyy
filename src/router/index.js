import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/Login'
import Register from 'pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    }
  ]
})
