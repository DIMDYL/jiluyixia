<script setup>
import { navurlstore } from '@/stores/navinfo.js'
import { userInfostore } from '@/stores/userinfo.js'
const user = userInfostore()
const userurl = navurlstore()
userurl.url = location.pathname
const handleOpen = (key) => {
  userurl.updateurl(key)
}
const logout = () => {
  console.log(1)
  user.clear()
  setTimeout(() => {
    history.go(0)
  }, 1000)
}
</script>
<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="black"
    class="el-menu-vertical-demo"
    :default-active="userurl.url"
    text-color="#fff"
    @open="handleOpen"
    router
  >
    <el-menu-item index="/">
      <el-icon><House /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/daily">
      <el-icon><Notebook /></el-icon>
      <span>日常</span>
    </el-menu-item>
    <el-menu-item index="/essay">
      <el-icon><Tickets /></el-icon>
      <span>随笔</span>
    </el-menu-item>
    <el-menu-item index="/publish">
      <el-icon><CirclePlus /></el-icon>
      <span>发布</span>
    </el-menu-item>
    <el-menu-item index="/userinfo">
      <el-icon><UserFilled /></el-icon>
      <span>用户信息</span>
    </el-menu-item>
    <el-menu-item @click="logout">
      <el-icon><SwitchButton /></el-icon>
      <span>退出登录</span>
    </el-menu-item>
  </el-menu>
</template>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: 77px;
  z-index: 27;
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
    // color: #ffd04b;
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
  background-color: transparent !important;
  // font-weight: 800 !important;
  // border-bottom: 3px solid #ffcf4b90;
  // border-radius: 0 0 30px 30px;
  box-sizing: border-box;
  .title {
    display: none;
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
