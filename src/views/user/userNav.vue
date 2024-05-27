<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)
const defaultactive = ref(location.pathname)

const drawer = ref(false)
const direction = ref('ltr')
</script>
<template>
  <div class="nav" :class="{ show: y >= 88 }">
    <a class="logo" @click="drawer = true">
      <el-icon :size="30"><Expand /></el-icon>
    </a>
    <div class="mini" @click="drawer = true">
      <el-icon :size="30"><Expand /></el-icon>
    </div>
    <div class="title">用户中心</div>
    <a class="userinfo" href="/user">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <!-- <p>GEM</p> -->
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
      active-text-color="#ffd04b"
      background-color="black"
      class="el-menu-vertical-demo"
      :default-active="defaultactive"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-menu-item index="/">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <el-icon><Notebook /></el-icon>
        <span>日常</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Tickets /></el-icon>
        <span>随笔</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><CirclePlus /></el-icon>
        <span>发布</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><UserFilled /></el-icon>
        <span>用户信息</span>
      </el-menu-item>
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
  background-color: black;
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
  background-color: rgba(0, 0, 0, 0.726);
  font-weight: 800 !important;
  border-bottom: 3px solid #ffcf4b90;
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
