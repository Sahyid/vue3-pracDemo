import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/discover',
    name: 'Show',
    component: () => import('../views/Show.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/mine',
    name: '/mine',
    component: () => import('../layout/index.vue'),
    children:[
      {
        path: '/mine',
        name: '',
        component: () => import('../views/mine/index.vue')
      },
      {
        path: '/shoppingCar',
        name: '',
        component: () => import('../views/shoppingCart/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
