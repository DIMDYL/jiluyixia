<script setup>
import indexNav from '@/components/nav/index.vue'
</script>
<template>
  <indexNav />
  <div class="content">
    <RouterView />
  </div>
  <el-backtop :right="20" :bottom="77" />
</template>
<style lang="less" scoped></style>
