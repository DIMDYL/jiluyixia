<script setup>
import { ref, onMounted } from 'vue'
import { getuserinfo } from '@/apis/userapis.js'
const user = ref({})
onMounted(async () => {
  const data = await getuserinfo()
  user.value = data.data
})
</script>
<template>
  <div class="avatar animate__animated animate__wobble">
    <el-avatar :src="user.avatar" />
  </div>
  <div class="info">
    <div>
      <p>昵称:</p>
      <a>{{ user.nickname }}</a>
    </div>
    <div>
      <p>用户名:</p>
      <a>{{ user.username }}</a>
    </div>
    <!-- <div>
      <p>邮箱:</p>
      <a>hello@z2z.com</a>
    </div> -->
    <div>
      <p>注册时间:</p>
      <a>{{ user.createTime }}</a>
    </div>

    <a class="updateuser" href="/updateuser">编辑</a>
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
    border: 3px solid white;
    color: white;
  }
  .updateuser {
    padding: 10px 20px;
    font-weight: 800;
    background-color: black;
    border-radius: 20px;
    color: white;
    text-decoration: none;
    color: #faca45cb;
    text-shadow: 0px 5px 10px rgb(224, 9, 239);
  }
}
.avatar {
  // cursor: pointer;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  border: 7px solid white;
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
