import request from '@/request/request.js'

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
    '/article/getall?page=' + page + '&size=10' + '&classification=' + classification
  )
}
