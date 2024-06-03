<script setup>
import editFrom from './editFrom.vue'
import { userInfostore } from '@/stores/userinfo.js'
import { loginagain } from '@/apis/userapis'
import { ref } from 'vue'
const userstore = userInfostore()
const userlogin = async () => {
  const userinfo = {
    username: user.value.username,
    password: user.value.password
  }
  await loginagain(userinfo)
}
const user = ref({
  username: '',
  password: ''
})
const off = () => {
  userstore.setdialogVisible(false)
}
</script>
<template>
  <div class="editFrom">
    <h1>修改内容</h1>
    <editFrom />
  </div>
  <el-dialog
    v-model="userstore.dialogVisible"
    title="重新登录"
    width="500"
    draggable
  >
    <el-form
      label-position="top"
      label-width="auto"
      :model="user"
      style="max-width: 600px"
    >
      <el-form-item label="用户名">
        <el-input v-model="user.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%; margin-top: 20px"
          @click="userlogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="off">关闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<style lang="less" scoped>
.editFrom {
  width: 100%;
  display: flex;
  // margin-top: 70px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  h1 {
    padding: 20px 0;
    color: #ffd04b;
  }
  textarea {
    width: 500px;
    height: 100px;
    outline: none;
    background-color: black;
    color: white;
    padding: 10px;
    box-sizing: border-box;
    max-width: 500px;
  }
}
</style>
