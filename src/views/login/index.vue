<script setup>
import { ref } from 'vue'
import { login } from '@/apis/userapis'
const user = ref({
  username: '',
  password: ''
})
const userlogin = async () => {
  const userinfo = {
    username: user.value.username,
    password: user.value.password
  }
  await login(userinfo)
}
</script>
<template>
  <div class="login">
    <h1>登录</h1>
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
        <el-input type="password" v-model="user.password" />
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
  </div>
</template>
<style lang="less" scoped>
.login {
  padding: 70px 10px;
  box-sizing: border-box;
  // height: 700px;
  // margin-top: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
