<script setup>
import { getallArticle } from '@/apis/userapis.js'
import { ref } from 'vue'
const count = ref(1)
const articlelist = ref([])
const props = defineProps({
  isuserHome: Boolean,
  boxwidth: String,
  title: String,
  classification: Number
})
const load = async () => {
  const { data } = await getallArticle(count.value, props.classification)
  console.log(data)
  if (data.records.length !== 0) {
    articlelist.value.push(...data.records)
    count.value++
  }
}
const imgpath = (val) => {
  return JSON.parse(val)[0]
}
</script>
<template>
  <div class="article" v-infinite-scroll="load">
    <p style="color: #ffd04b; font-size: 27px; padding: 20px 0; box-sizing: border-box">
      {{ title }}
    </p>
    <div class="articlebox" v-for="(item, index) in articlelist" :key="item.id">
      <div class="leftarticle" :style="{ width: boxwidth }" v-if="index % 2 === 0">
        <div class="img" v-if="imgpath(item.imgs) != null">
          <img :src="imgpath(item.imgs)" />
        </div>
        <div class="word" style="padding-left: 7px">
          <h3 style="" class="right-title">{{ item.createTime }}</h3>
          <p>
            {{ item.content }}
          </p>
          <div class="leftoperation">
            <a v-if="isuserHome">删除</a>
            <a v-if="isuserHome">编辑</a>
            <a>查看详情 ></a>
          </div>
        </div>
      </div>
      <div class="rightarticle" :style="{ width: boxwidth }" v-else>
        <div class="word" style="padding-right: 7px">
          <h3 style="" class="left-title">{{ item.createTime }}</h3>
          <p>
            {{ item.content }}
          </p>
          <div class="rightoperation">
            <a v-if="isuserHome">删除</a>
            <a v-if="isuserHome">编辑</a>
            <a>查看详情 ></a>
          </div>
        </div>
        <div class="img" v-if="imgpath(item.imgs) != null">
          <img :src="imgpath(item.imgs)" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.article {
  padding: 70px 0;
  // box-sizing: border-box;
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
          -webkit-line-clamp: 4;
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
