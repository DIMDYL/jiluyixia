import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index/index.vue'
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
        }
      ]
    },
    {
      path: '/user',
      component: () => import('@/views/user/index.vue'),
      children: [
        {
          path: '/user',
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
        }
      ]
    }
  ]
})
router.afterEach((to) => {
  document.title = `${to.meta.title || ''} - 记录一下`
  window.scrollTo(0, 0)
})
export default router
