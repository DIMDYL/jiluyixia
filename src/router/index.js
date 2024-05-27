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
        }
      ]
    }
  ]
})
router.afterEach((to) => {
  document.title = `${to.meta.title || ''} - 记录一下`
  const contentContainer = document.querySelector('.main')
  if (contentContainer) {
    contentContainer.scrollTop = 0
  } else {
    // 如果没有找到特定容器，则尝试滚动整个窗口
    window.scrollTo(0, 0)
  }
})
export default router
