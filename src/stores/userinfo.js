import { ref } from 'vue'
import { defineStore } from 'pinia'
// 文章组件存储内容
export const userInfostore = defineStore(
  'userinfo',
  () => {
    const userinfo = ref(null)
    const token = ref(null)
    const dialogVisible = ref(false)
    const setdialogVisible = (val) => {
      dialogVisible.value = val
    }
    const setuserinfo = (val) => {
      userinfo.value = val
    }
    const settoken = (val) => {
      token.value = val
    }
    const clear = () => {
      userinfo.value = null
      token.value = null
    }
    return {
      userinfo,
      token,
      setuserinfo,
      settoken,
      dialogVisible,
      setdialogVisible,
      clear
    }
  },
  {
    persist: {
      key: 'userinfo'
    }
  }
)
