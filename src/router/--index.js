import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import frame from '@/frame/index.vue'

export const constantRoutes = [
  {
    path: '/',
    component: frame,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: 'Home', icon: 'dashboard' }
      }
    ]
  }
]

export const asyncRoutes = [
  {}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default Router
