import request from '@/request/request.js'
import router from '@/router'
import { userInfostore } from '@/stores/userinfo.js'
const user = userInfostore()
// 添加文章接口
export const addArticle = (data) => {
  request.post('/article/add', data).then((res) => {
    if (res.code === 1) {
      setTimeout(() => {
        history.go(0)
      }, 500)
    }
  })
}
export const getallArticle = (page, classification) => {
  return request.get(
    '/article/getall?page=' +
      page +
      '&size=10' +
      '&classification=' +
      classification
  )
}

export const login = (data) => {
  request.post('/user/login', data).then((res) => {
    if (res.code === 1) {
      router.push('/')
      user.setuserinfo(res.data.userEntity)
      user.settoken(res.data.token)
      user.setdialogVisible(false)
    }
  })
}
export const loginagain = (data) => {
  request.post('/user/login', data).then((res) => {
    if (res.code === 1) {
      user.setuserinfo(res.data.userEntity)
      user.settoken(res.data.token)
      user.setdialogVisible(false)
    }
  })
}
export const testlogin = () => {
  return request.get('/user/testlogin')
}
