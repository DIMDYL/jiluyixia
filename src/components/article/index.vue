<script setup>
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 1
  console.log(count.value)
}
defineProps({
  isuserHome: Boolean,
  boxwidth: String,
  title: String
})
</script>
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
      {{ title }}
    </p>
    <div class="articlebox" v-infinite-scroll="load">
      <div class="leftarticle" :style="{ width: boxwidth }">
        <div class="img">
          <img src="@/assets/001RqsRzly1hq2alvdlf2j61900u0wlm02.jpg" />
        </div>
        <div class="word" style="padding-left: 7px">
          <h1 style="" class="right-title">2024年8月16日</h1>
          <p>
            测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章
            测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章
          </p>
          <div class="leftoperation">
            <a v-if="isuserHome">删除</a>
            <a v-if="isuserHome">编辑</a>
            <a>查看详情 ></a>
          </div>
        </div>
      </div>
      <div class="rightarticle" :style="{ width: boxwidth }">
        <div class="word" style="padding-right: 7px">
          <h1 style="" class="left-title">2024年8月16日</h1>
          <p>
            测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章测试测试测试测试文章文章文章文章
          </p>
          <div class="rightoperation">
            <a v-if="isuserHome">删除</a>
            <a v-if="isuserHome">编辑</a>
            <a>查看详情 ></a>
          </div>
        </div>
        <div class="img">
          <img src="@/assets/001RqsRzly1hq2alsd0lfj60u01900ya02.jpg" />
        </div>
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
  box-sizing: border-box;
  padding: 10px;
  .articlebox {
    width: 100%;
    background-color: black;
    z-index: 1 !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    .leftarticle {
      .img {
        // transform: rotate(7deg);
      }
    }
    .rightarticle {
      .img {
        // transform: rotate(-7deg);
      }
    }
    .leftarticle,
    .rightarticle {
      // width: 777px;
      min-height: 100px;
      margin: 27px 0;
      // height: 300px;
      display: flex;
      align-items: center;
      padding: 5px;
      box-sizing: border-box;
      .img {
        width: 300px;
        // margin: 0 20px;
        border-radius: 20px;
        img {
          width: 100%;
        }
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
        .leftoperation,
        .rightoperation {
          color: #ffd04b;
          text-align: right;
          display: flex;
          a {
            padding: 10px;
            cursor: pointer !important;
          }
        }
        .leftoperation {
          justify-content: end;
        }
        .rightoperation {
          justify-content: start;
        }
      }
    }
  }
}
</style>
