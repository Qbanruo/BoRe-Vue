import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let needAuth = false

const router = new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld'),
      meta: {
        auth: needAuth,
        title: 'HelloWorld'
      }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home/home'),
      meta: {
        auth: needAuth,
        title: '首页'
      }
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/components/message/message'),
      meta: {
        auth: needAuth,
        title: '消息'
      }
    }
  ]
})

router.afterEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
