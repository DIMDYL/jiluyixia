<script setup></script>
<template>
  <div class="info">
    <div>
      <p>昵称:</p>
      <a>DIMDYL</a>
    </div>
    <div>
      <p>用户名:</p>
      <a>DIMDYL</a>
    </div>
    <div>
      <p>邮箱:</p>
      <a>hello@z2z.com</a>
    </div>
    <div>
      <p>注册时间:</p>
      <a>2024年8月16日</a>
    </div>

    <el-button>编辑</el-button>
  </div>
</template>
<style lang="less" scoped>
.info {
  margin-left: 50px;
  div {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    color: #faca45cb;
    font-weight: 800;
    p {
      text-align: center;
      text-shadow: 0px 3px 10px rgb(224, 9, 239);
      padding-right: 20px;
    }
    a {
      flex: 1;
      text-shadow: 0px 3px 10px rgb(224, 9, 239);
    }
  }
  button {
    background-color: black;
    color: white;
  }
}
</style>
