<script setup>
import indexTop from './indexTop.vue'
import articleComponents from '@/components/article/index.vue'
</script>
<template>
  <div class="daily">
    <indexTop />
    <articleComponents :isuserHome="false" />
  </div>
</template>
<style lang="less" scoped>
.daily {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 0 0 77px 0;
}
</style>
