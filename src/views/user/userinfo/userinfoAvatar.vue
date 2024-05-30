<script setup>
import { ref } from 'vue'
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
</template>
<style lang="less" scoped>
.userinfo {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
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
}
</style>
