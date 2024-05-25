<script setup>
import { navurlstore } from '@/stores/navinfo.js'
const navurl = navurlstore()
navurl.updateurl(location.pathname)
// const handleSelect = (key) => {
//   navurl.updateurl(key)
// }
</script>
<template>
  <!-- :class="{ show: y >= 277 }" -->
  <div class="usernav">
    <a class="logo" href="/">
      <h3>记录一下</h3>
      <p>记录平凡的每一天</p>
    </a>
    <div class="navlist">
      <!-- <el-menu
        :default-active="navurl.url"
        @select="handleSelect"
        class="el-menu-demo"
        mode="horizontal"
        background-color="transparent"
        text-color="#fff"
        :ellipsis="false"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/user">用户中心</el-menu-item>
      </el-menu> -->
    </div>
    <div class="userinfo">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <!-- <p>GEM</p> -->
    </div>
  </div>
</template>
<style lang="less" scoped>
.usernav {
  width: 100%;
  height: 77px;
  z-index: 27;
  display: flex;
  justify-content: space-between;
  padding: 0 77px;
  align-items: center;
  transition: 1s all;
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
  height: 100px;
  background-color: rgba(0, 0, 0, 0.833);
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
</style>
