<script setup>
import userInfo from './userInfo.vue'
</script>
<template>
  <div class="userinfo">
    <div class="userinfobox">
      <userInfo />
    </div>
  </div>
</template>
<style lang="less" scoped>
.userinfo {
  width: 100%;
  display: flex;
  height: 100vh;
  margin-top: -77px;
  justify-content: center;
  background-image: url('@/assets/bg1.jpg');
  background-size: 100% 100%;
  align-items: center;
  .userinfobox {
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, 0.208);
    padding: 27px;
    height: auto;
    border-radius: 27px;
  }
}
</style>
