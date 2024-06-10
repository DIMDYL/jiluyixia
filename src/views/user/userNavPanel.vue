<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)
import userNav from './userNav.vue'
const drawer = ref(false)
const direction = ref('ltr')
</script>
<template>
  <div class="userhomenav" :class="{ show: y >= 77 }">
    <a class="logo" @click="drawer = true">
      <el-icon :size="30"><Expand /></el-icon>
    </a>
    <div class="mini" @click="drawer = true">
      <el-icon :size="30"><Expand /></el-icon>
    </div>
    <div class="userhometitle">用户中心</div>
    <a class="userinfo" href="/user">
      <div class="login">
        <el-icon><UserFilled /></el-icon>
      </div>
    </a>
  </div>
  <el-drawer
    v-model="drawer"
    size="200px"
    :with-header="false"
    :lock-scroll="false"
    append-to-body="true"
    :direction="direction"
  >
    <div class="title">
      <p>记录一下</p>
      <h3 @click="drawer = false">
        <el-icon :size="30"><Fold /></el-icon>
      </h3>
    </div>
    <userNav />
  </el-drawer>
</template>
<style lang="less" scoped>
.userhomenav {
  width: 100%;
  height: 77px;
  z-index: 27;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 77px;
  align-items: center;
  transition: 1s all;
  background-color: rgba(0, 0, 0, 0) !important;
  .mini {
    cursor: pointer;
    display: none;
  }
  .logo {
    display: block;
    cursor: pointer;
    color: #ffd04b;
    p {
      font-size: 14px;
    }
  }
  .userinfo {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
  a {
    padding: 0 10px;
    color: white;
    text-decoration: none;
    // &:hover {
    //   color: rgb(211, 211, 211);
    // }
  }
}
.show {
  height: 55px !important;
  background-color: rgba(0, 0, 0, 0.683) !important;
  // font-weight: 800 !important;
  border-bottom: 3px solid #ffcf4b90;
  border-radius: 0 0 30px 30px;
  box-sizing: border-box;
  // .userhometitle {
  //   display: none !important;
  // }
}
.login {
  display: flex;
  align-items: center;
  .el-icon {
    font-size: 27px;
  }
}
.el-menu--horizontal.el-menu,
.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-menu-item {
  border-bottom: none !important;
}
.el-menu {
  --el-menu-hover-bg-color: transparent !important;
}
.el-menu-item:hover {
  color: #ffd04b !important;
}
.title {
  display: flex;
  justify-content: space-between;
  h3 {
    cursor: pointer;
  }
}
.el-menu {
  border-right: none;
  // margin-top: 100px !important;
}
</style>
