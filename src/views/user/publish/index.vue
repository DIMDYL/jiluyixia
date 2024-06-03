<script setup>
import publishFrom from './publishFrom.vue'
</script>
<template>
  <div class="publish">
    <h1>内容发布</h1>
    <publishFrom />
  </div>
</template>
<style lang="less" scoped>
.publish {
  width: 100%;
  display: flex;
  // margin-top: 70px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  h1 {
    padding: 20px 0;
    color: #ffd04b;
  }
  textarea {
    width: 500px;
    height: 100px;
    outline: none;
    background-color: black;
    color: white;
    padding: 10px;
    box-sizing: border-box;
    max-width: 500px;
  }
}
</style>
