<script setup>
import { updateArticle, getByIdAndUserId } from '@/apis/userapis.js'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
let article = ref({
  classification: '',
  content: ''
})
const fileList = ref([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file) => {
  fileList.value = fileList.value.filter((item) => {
    return item.uid !== file.uid
  })
}

async function urlToFile(url, fileName) {
  try {
    const response = await axios.get(url, {
      responseType: 'blob' // 确保响应类型为 blob
    })
    const blob = new Blob([response.data], { type: response.data.type })
    return new File([blob], fileName, { type: response.data.type })
  } catch (error) {
    console.error('Error fetching image:', error)
    throw error
  }
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const onSubmit = async () => {
  let fd = new FormData()
  const filePromises = fileList.value.map((item) =>
    urlToFile(item.url, item.name)
  )
  try {
    const files = await Promise.all(filePromises)
    files.forEach((file) => {
      fd.append('imgs', file)
    })
    fd.append('classification', article.value.classification === true ? 2 : 1)
    fd.append('content', article.value.content)
    fd.append('id', article.value.id)

    await updateArticle(fd)
    console.log('Article updated successfully')
  } catch (error) {
    console.error('Error updating article:', error)
  }
}
const goback = () => {
  history.go(-1)
}
// 异步获取数据
onMounted(async () => {
  const data = await getByIdAndUserId(route.params.id)
  data.data.classification = data.data.classification === 2 ? true : false
  article.value = data.data
  fileList.value.push(...JSON.parse(article.value.imgs))
})
</script>

<template>
  <el-form :model="article" label-width="auto" style="width: 600px">
    <el-form-item label="内容">
      <el-input
        v-model="article.content"
        placeholder="写点什么好呢？"
        type="textarea"
      />
    </el-form-item>
    <el-form-item label="上传图片">
      <el-upload
        v-model:file-list="fileList"
        action="#"
        list-type="picture-card"
        :auto-upload="false"
      >
        <el-icon><Plus /></el-icon>
        <template #file="{ file }">
          <div>
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <el-icon><zoom-in /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <el-icon><Delete /></el-icon>
              </span>
            </span>
          </div>
        </template>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
    </el-form-item>
    <el-form-item label="分类">
      <el-switch
        v-model="article.classification"
        class="ml-2"
        inline-prompt
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        active-text="日常"
        inactive-text="随笔"
      />
    </el-form-item>
    <div class="send">
      <el-button @click="goback" v-preventReClick>返回</el-button>
      <el-button type="primary" @click="onSubmit" v-preventReClick
        >保存</el-button
      >
    </div>
  </el-form>
</template>

<style lang="less" scoped>
.publish {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.send {
  width: 100%;
  display: flex;
  justify-content: end;
}
/deep/ .el-textarea__inner {
  width: 100% !important;
  height: 300px !important;
  background-color: black !important;
  color: white;
}
/deep/ .el-select__wrapper {
  background-color: black !important;
  span {
    color: white !important;
  }
}
/deep/ .el-dialog {
  background-color: rgb(58, 58, 58) !important;
  color: white !important;
  .el-dialog__body {
    display: flex !important;
    justify-content: center !important;
  }
  img {
    max-width: 100% !important;
  }
}
</style>
