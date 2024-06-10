<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
const navurl = ref(location.pathname)
const { y } = useScroll(window)
const drawer = ref(false)
const direction = ref('ltr')
</script>
<template>
  <div class="nav" :class="{ show: y >= 88 }">
    <a class="logo" href="/">
      <h3>记录一下</h3>
      <p>记录平凡的每一天</p>
    </a>
    <div class="mini" @click="drawer = true">
      <el-icon :size="30"><Expand /></el-icon>
    </div>
    <div class="userhometitle">记录一下</div>
    <div class="navlist">
      <el-menu
        :default-active="navurl"
        class="el-menu-demo"
        mode="horizontal"
        background-color="transparent"
        text-color="#fff"
        :ellipsis="false"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/jottings">随笔</el-menu-item>
        <el-menu-item index="/user">用户中心</el-menu-item>
      </el-menu>
    </div>
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
    <el-menu
      :default-active="navurl"
      class="el-menu-demo"
      background-color="transparent"
      text-color="#fff"
      :ellipsis="false"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/jottings">随笔</el-menu-item>
      <el-menu-item index="/user">用户中心</el-menu-item>
    </el-menu>
  </el-drawer>
</template>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: 77px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 27;
  display: flex;
  justify-content: space-between;
  padding: 0 77px;
  align-items: center;
  transition: 0.5s all;
  .mini {
    cursor: pointer;
    display: none;
  }
  .login {
    display: flex;
    align-items: center;
    .el-icon {
      font-size: 27px;
    }
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
    &:hover {
      color: rgb(211, 211, 211);
    }
  }
}
.show {
  height: 55px;
  background-color: rgba(0, 0, 0, 0.553);
  border-bottom: 3px solid #ffcf4b90;
  // box-shadow: 2px 2px 10px 5px rgba(64, 63, 63, 0.482);
  font-weight: 800 !important;
  // border-bottom: 5px solid #ffcf4b5b;
  border-radius: 0 0 30px 30px;
  box-sizing: border-box;
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
