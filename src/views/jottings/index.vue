<script setup>
import articleComponents from '@/components/article/index.vue'
import indexTop from '@/components/indexTop/index.vue'
</script>
<template>
  <indexTop />
  <articleComponents
    boxwidth="70%"
    title="《 随笔 》"
    :classification="1"
    :isuserHome="false"
  />
</template>
