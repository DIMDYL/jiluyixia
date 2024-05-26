<script setup>
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 1
  console.log(count.value)
}
defineProps({
  isuserHome: Boolean
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
      《 和 解 解 的 故 事 》
    </p>
    <div class="articlebox" v-infinite-scroll="load">
      <div class="leftarticle">
        <img
          class="img"
          src="@/assets/001RqsRzly1hq2alvdlf2j61900u0wlm02.jpg"
        />
        <div class="word">
          <h1 style="" class="right-title">2024年8月16日</h1>
          <p>
            特别开心的一个晚上！好久都没有这么这么开心了！终于见到了耳机里的解解，每一首歌都听了好多好多遍，现场稳的吓人！又飒又可爱哎呦我真的
          </p>
          <div class="leftoperation">
            <a v-if="isuserHome">删除</a>
            <a v-if="isuserHome">编辑</a>
            <a>查看详情 ></a>
          </div>
        </div>
      </div>
      <div class="rightarticle">
        <div class="word">
          <h1 style="" class="left-title">2024年8月16日</h1>
          <p>
            特别开心的一个晚上！好久都没有这么这么开心了！终于见到了耳机里的解解，每一首歌都听了好多好多遍，现场稳的吓人！又飒又可爱哎呦我真的特别开心的一个晚上！好久都没有这么这么开心了！终于见到了耳机里的解解，每一首歌都听了好多好多遍，现场稳的吓人！又飒又可爱哎呦我真的特别开心的一个晚上！好久都没有这么这么开心了！终于见到了耳机里的解解，每一首歌都听了好多好多遍，现场稳的吓人！又飒又可爱哎呦我真的
          </p>
          <div class="rightoperation">
            <a v-if="isuserHome">删除</a>
            <a v-if="isuserHome">编辑</a>
            <a>查看详情 ></a>
            <slot></slot>
          </div>
        </div>
        <img
          class="img"
          src="@/assets/001RqsRzly1hq2alsd0lfj60u01900ya02.jpg"
        />
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
      width: 777px;
      min-height: 100px;
      // margin: 20px 0;
      // height: 300px;
      display: flex;
      align-items: center;
      .img {
        width: 300px;
        margin: 0 20px;
        border-radius: 20px;
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
