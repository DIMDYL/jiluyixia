<script setup>
import indexTop from '@/components/indexTop/index.vue'
import articleComponents from '@/components/article/index.vue'
</script>
<template>
  <indexTop />
  <articleComponents
    :classification="2"
    boxwidth="70%"
    title="《 日常 》"
    :isuserHome="false"
  />
</template>
