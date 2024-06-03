import index from '@/views/index/index.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { userInfostore } from '@/stores/userinfo.js'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          meta: { title: '首页' },
          component: () => import('@/views/daily/index.vue')
        },
        {
          path: '/login',
          meta: { title: '登录' },
          component: () => import('@/views/login/index.vue')
        },
        {
          path: '/jottings',
          meta: { title: '随笔' },
          component: () => import('@/views/jottings/index.vue')
        },
        {
          path: '/look/:id',
          meta: { title: '文章详情' },
          component: () => import('@/views/look/index.vue')
        }
      ]
    },
    {
      path: '/user',
      redirect: '/userinfo',
      component: () => import('@/views/user/index.vue'),
      children: [
        {
          path: '/daily',
          meta: { title: '我的日常' },
          component: () => import('@/views/user/daily/index.vue')
        },
        {
          path: '/essay',
          meta: { title: '随笔' },
          component: () => import('@/views/user/essay/index.vue')
        },
        {
          path: '/publish',
          meta: { title: '随笔' },
          component: () => import('@/views/user/publish/index.vue')
        },
        {
          path: '/userinfo',
          meta: { title: '用户信息' },
          component: () => import('@/views/user/userinfo/index.vue')
        },
        {
          path: '/edit/:id',
          meta: { title: '修改文章' },
          component: () => import('@/views/user/edit/index.vue')
        },
        {
          path: '/updateuser',
          meta: { title: '修改用户' },
          component: () => import('@/views/user/updateUser/index.vue')
        }
      ]
    }
  ]
})
router.afterEach((to) => {
  document.title = `${to.meta.title || ''} - 记录一下`
  window.scrollTo(0, 0)
})
router.beforeEach((to, form, next) => {
  const user = userInfostore()
  const token = user.token
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else if (
      to.path != '/' &&
      to.path != '/login' &&
      to.path != '/jottings'
    ) {
      next('/login')
    } else {
      next()
    }
  }
})
export default router
