<script setup>
import indexNav from '@/components/nav/index.vue'
</script>
<template>
  <indexNav />
  <div class="content">
    <RouterView />
  </div>
  <div class="fooder">
    <p>@DIMDYL</p>
  </div>
  <el-backtop :right="20" :bottom="77" />
</template>
<style lang="less" scoped>
.fooder {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
