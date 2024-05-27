<script setup>
import userNav from './userNav.vue'
</script>
<template>
  <div class="user">
    <userNav />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<style lang="less" scoped>
.user {
  width: 100%;
  .content {
    margin-top: 77px;
  }
}
</style>
