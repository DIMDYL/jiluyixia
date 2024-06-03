<template>
  <div class="dailytopimg">
    <!-- <div class="topshadow"></div> -->
    <img src="@/assets/sjhp.jpg" />
    <div class="bottomshadow"></div>
  </div>
</template>
<style lang="less" scoped>
.dailytopimg {
  width: 100%;
  position: relative;
  min-height: 200px;
  max-height: 1000px;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
  .topshadow,
  .bottomshadow {
    width: 100%;
    height: 200px;
    position: absolute;
  }
  .topshadow {
    top: 0;
    background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.724),
      rgba(0, 0, 0, 0.447) 30%,
      rgba(0, 0, 0, 0) 100%
    );
    // filter: blur(10px); /* 根据需要调整模糊值 */
  }
  .bottomshadow {
    bottom: 0;
    background-image: -webkit-linear-gradient(
      bottom,
      rgb(0, 0, 0) 20%,
      rgba(0, 0, 0, 0.648) 40%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}
</style>
