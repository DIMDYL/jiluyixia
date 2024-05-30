import axios from 'axios'
const request = axios.create({
  baseURL: 'http://127.0.0.1:8080/api',
  timeout: 5000
})
request.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.getItem('token')
    return config
  },
  (e) => {
    return Promise.reject(e)
  }
)
//  服务器响应
request.interceptors.response.use(
  (res) => {
    if (res.config.method === 'get') {
      return res.data
    }
    const data = res.data
    if (data.code === 0) {
      ElNotification.error({
        title: '成功',
        message: data.msg
      })
    } else if (data.code === 1) {
      console.log(222)
      ElNotification({
        title: '成功',
        message: data.msg
      })
    } else if (data.code === 2) {
      ElNotification({
        title: '错误',
        message: '登录过期'
      })
    }
    return res.data
  },
  (e) => {
    ElNotification({
      title: '错误',
      message: 'netWork Error'
    })
  }
)
export default request
