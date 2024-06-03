<script setup>
import articleComponents from '@/components/article/index.vue'
</script>
<template>
  <articleComponents
    boxwidth="80%"
    title="《 我的日常 》"
    :classification="2"
    :isuserHome="true"
  />
  <el-backtop :right="20" :bottom="77" />
</template>
