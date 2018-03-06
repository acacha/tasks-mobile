import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MainLayout from '@/components/layouts/MainLayout'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      alias: '/landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: 'hello',
          alias: '',
          component: Hello,
          name: 'Hello',
          meta: {
            description: 'Vue hello World',
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && (!router.app.mystore.state.token || router.app.mystore.state.token === 'null')) {
    window.console.log('Not authenticated')
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
