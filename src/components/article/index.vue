<template>
  <div class="article">
    <p
      style="
        color: #ffd04b;
        font-size: 27px;
        padding: 20px 0;
        box-sizing: border-box;
      "
    >
      《 和 解 解 的 故 事 》
    </p>
    <div class="articlebox">
      <div class="leftarticle">
        <div class="img"></div>
        <div class="word">
          <h1 style="" class="right-title">2024年8月16日</h1>
          <p>
            :class的:class的使用及通过:class实现标签切换状态改变
            使用及通过:class实现标签切换状态:class的使用及通过:class实现标签切换状态改变
            改变
          </p>
          <div class="bottom">
            <a class="look">查看详情 ></a>
            <slot></slot>
          </div>
        </div>
      </div>
      <div class="rightarticle">
        <div class="word">
          <h1 style="" class="left-title">2024年8月16日</h1>
          <p>
            这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容
            这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容
            这是一篇测试内容这是一篇测试内容这是一篇测试内容这是一篇测试内容
          </p>
          <div class="bottom">
            <a class="look" style="text-align: left">查看详情 ></a>
            <slot></slot>
          </div>
        </div>
        <div class="img"></div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.article {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  .articlebox {
    width: 100%;
    background-color: black;
    z-index: 1 !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    .leftarticle {
      .img {
        // transform: rotate(-7deg);
      }
    }
    .rightarticle {
      .img {
        // transform: rotate(7deg);
      }
    }
    .leftarticle,
    .rightarticle {
      width: 1000px;
      min-height: 100px;
      // margin: 20px 0;
      // height: 300px;
      display: flex;
      align-items: center;
      .img {
        width: 300px;
        height: 400px;
        background-color: rgb(85, 21, 21);
        margin: 0 20px;
      }
      .word {
        flex: 1;
        box-sizing: border-box;
        p {
          line-height: 40px;
          text-indent: 2em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 7;
        }
        .bottom {
          color: #ffd04b;
          text-align: right;
          display: flex;
          flex-direction: column;
          a {
            padding: 10px 0;
            cursor: pointer !important;
          }
        }
      }
    }
  }
}
</style>
