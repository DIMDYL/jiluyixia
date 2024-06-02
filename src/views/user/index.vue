<script setup>
import userNavPanel from './userNavPanel.vue'
</script>
<template>
  <div class="user">
    <userNavPanel />
    <div class="usercontent">
      <!-- <div class="userleftnav">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <userNav />
      </div> -->
      <div class="right">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.user {
  width: 100%;
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
