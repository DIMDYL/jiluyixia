<script setup>
import indexTop from './indexTop.vue'
import articleComponents from '@/components/article/index.vue'
</script>
<template>
  <div class="daily">
    <indexTop />
    <articleComponents
      boxwidth="1000px"
      title="《 日常 》"
      :isuserHome="false"
    />
  </div>
</template>
<style lang="less" scoped>
.daily {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
