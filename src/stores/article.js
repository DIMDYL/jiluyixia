import { ref } from 'vue'
import { defineStore } from 'pinia'
// 文章组件存储内容
export const articleStore = defineStore('article', () => {
  const article = ref(null)
  const setarticle = (val) => {
    article.value = val
  }
  return { article, setarticle }
})
