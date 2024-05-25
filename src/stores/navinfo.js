import { ref } from 'vue'
import { defineStore } from 'pinia'

export const navurlstore = defineStore(
  'userurl',
  () => {
    const url = ref('/')
    const updateurl = (val) => {
      url.value = val
    }
    return { url, updateurl }
  },
  {
    persist: {
      key: 'navurl'
    }
  }
)
