import { ref } from 'vue'
import { defineStore } from 'pinia'
// 文章组件存储内容
export const articlestore = defineStore('article', () => {
  const article = ref(null)
  const updatearticle = (val) => {
    article.value = val
  }
  return { article, updatearticle }
})
