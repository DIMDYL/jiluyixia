<script setup>
import userNavPanel from './userNavPanel.vue'
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
  <el-dialog
    v-model="userstore.dialogVisible"
    title="登录过期"
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
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="off">关闭</el-button>
      </div>
    </template>
  </el-dialog>
  <div class="user">
    <userNavPanel />
    <div class="usercontent">
      <RouterView />
    </div>
    <div class="fooder">
      <p>@DIM</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.user {
  width: 100%;
  margin-top: 70px;
  .fooder {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .usercontent {
    display: flex;
    .userleftnav {
      position: fixed;
      z-index: 10;
      width: 200px;
      height: 100%;
      padding: 70px 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: black;
      .el-avatar {
        width: 100px;
        height: 100px;
      }
    }
    .right {
      width: 100%;
    }
  }
}
</style>
