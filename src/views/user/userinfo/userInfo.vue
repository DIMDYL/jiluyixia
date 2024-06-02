<script setup>
import { userInfostore } from '@/stores/userinfo.js'
import { ref } from 'vue'
const user = userInfostore()
const inputimg = ref(null)
const updateimg = () => {
  inputimg.value.click()
}
</script>
<template>
  <div class="avatar animate__animated animate__wobble">
    <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      @click="updateimg"
    />
    <input style="display: none" type="file" ref="inputimg" />
    <el-icon @click="updateimg"><Plus /></el-icon>
  </div>
  <div class="info">
    <div>
      <p>昵称:</p>
      <a>{{ user.userinfo.nickname }}</a>
    </div>
    <div>
      <p>用户名:</p>
      <a>{{ user.userinfo.username }}</a>
    </div>
    <!-- <div>
      <p>邮箱:</p>
      <a>hello@z2z.com</a>
    </div> -->
    <div>
      <p>注册时间:</p>
      <a>{{ user.userinfo.createTime }}</a>
    </div>

    <el-button>编辑</el-button>
  </div>
</template>
<style lang="less" scoped>
.info {
  margin-left: 50px;
  div {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    color: #faca45cb;
    font-weight: 800;
    text-shadow: 0px 3px 10px rgb(224, 9, 239);
    p {
      text-align: center;
      padding-right: 20px;
    }
    a {
      flex: 1;
    }
  }
  button {
    background-color: black;
    color: white;
  }
}
.avatar {
  cursor: pointer;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  .el-icon {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    bottom: 0;
    color: black;
    border-radius: 50%;
    background-color: #ffd04b;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .el-avatar {
    width: 100%;
    height: 100%;
  }
}
</style>
