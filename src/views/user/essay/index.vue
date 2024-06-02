<script setup>
import articleComponents from '@/components/article/index.vue'
</script>
<template>
  <articleComponents
    boxwidth="80%"
    title="《 随笔 》"
    paddingnumber="70px 0"
    :classification="1"
    :isuserHome="true"
  />
  <el-backtop :right="20" :bottom="77" />
</template>
