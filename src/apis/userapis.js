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
// 根据分类id分页查询文章
export const getallArticle = (page, classification) => {
  return request.get(
    '/article/getall?page=' +
      page +
      '&size=10' +
      '&classification=' +
      classification
  )
}
// 登录
export const login = (data) => {
  request.post('/user/login', data).then((res) => {
    if (res.code === 1) {
      router.push('/')
      user.settoken(res.data.token)
      user.setdialogVisible(false)
    }
  })
}
// 再次登录
export const loginagain = (data) => {
  request.post('/user/login', data).then((res) => {
    if (res.code === 1) {
      user.settoken(res.data.token)
      user.setdialogVisible(false)
    }
  })
}
export const testlogin = () => {
  return request.get('/user/testlogin')
}
// 根据id获取文章
export const getByIdAndUserId = (id) => {
  return request.get('/article/get/' + id)
}
// 根据id获取文章
export const updateArticle = (data) => {
  return request.put('/article/update/', data).then((res) => {
    if (res.code === 1) {
      setTimeout(() => {
        history.go(0)
      }, 500)
    }
  })
}
// 删除文章
export const deleteArticle = (id) => {
  request.delete('/article/delete/' + id).then((res) => {
    if (res.code === 1) {
      setTimeout(() => {
        history.go(0)
      }, 500)
    }
  })
}
export const updateavatar = (data) => {
  request.delete('/user/updateavatar/', data).then((res) => {
    if (res.code === 1) {
      console.log(res)
    }
  })
}

// 更新用户信息
export const updateuser = (data) => {
  request.put('/user/update/', data).then((res) => {
    if (res.code === 1) {
      setTimeout(() => {
        history.go(0)
      }, 500)
    }
  })
}
// 更新用户信息
export const lookarticle = (id) => {
  return request.get('/article/look/' + id)
}

// 更新用户信息
export const getuserinfo = () => {
  return request.get('/user/userinfo')
}
