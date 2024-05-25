<script setup>
import indexTop from './indexTop.vue'
import story from '@/components/article/index.vue'
</script>
<template>
  <div class="daily">
    <indexTop />
    <story></story>
  </div>
</template>
<style lang="less" scoped>
.daily {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 77px 0;
}
</style>
