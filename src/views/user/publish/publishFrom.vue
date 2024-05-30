<script setup>
import { addArticle } from '@/apis/userapis.js'
import { ref } from 'vue'
let article = ref({
  classification: true,
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

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}
const onSubmit = async () => {
  // 类型
  const newclassification = ref(null)
  // 如果为true就是文章,不然就是随笔
  if (article.value.classification) newclassification.value = 2
  else newclassification.value = 1
  let fd = new FormData()
  fileList.value.filter((item) => fd.append('imgs', item.raw))
  fd.append('classification', newclassification.value)
  fd.append('content', article.value.content)
  addArticle(fd)
}
</script>
<script setup></script>
<template>
  <el-form :model="article" label-width="auto" style="width: 600px">
    <el-form-item label="内容">
      <el-input v-model="article.content" placeholder="写点什么好呢？" type="textarea" />
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
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
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
        active-text="文章"
        inactive-text="随笔"
      />
    </el-form-item>
    <div class="send">
      <el-button type="primary" @click="onSubmit">发布</el-button>
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
