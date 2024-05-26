<script setup></script>
<template>
  <div class="usernav">
    <div class="nav">
      <h1 class="animate__animated animate__bounce animate__bounceIn">
        用户中心
      </h1>
      <el-menu
        active-text-color="#ffd04b"
        background-color="rgb(32, 29, 29)"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <a href="/">
          <el-menu-item>
            <el-icon><setting /></el-icon>
            <span>首页</span>
          </el-menu-item>
        </a>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>日常</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>说说</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>用户信息</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>修改密码</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<style lang="less" scoped>
.usernav {
  width: 200px;
  height: 100vh;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .nav {
    h1 {
      color: #ffd04b;
      text-align: center;
      padding: 20px 0;
    }
    display: flex;
    flex-direction: column;
    // height: 100px;
    min-height: 400px;
    background-color: rgb(32, 29, 29);
    padding: 20px;
    border-radius: 27px;
  }
}
a:active {
  text-decoration: none;
}
.el-menu {
  border-right: none;
}
</style>
