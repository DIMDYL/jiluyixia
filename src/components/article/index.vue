<script setup>
import { getallArticle } from '@/apis/userapis.js'
import { ref } from 'vue'
const count = ref(1)
const articlelist = ref([])
const props = defineProps({
  isuserHome: Boolean,
  paddingnumber: String,
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
  <div class="articlesbox" :style="{ padding: paddingnumber }">
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
    <!-- <el-empty description="还没有内容" v-if="articlelist.length === 0" /> -->
    <!-- {{ articlelist.length }} -->
    <div v-infinite-scroll="load" style="width: 100%">
      <div class="articles" v-for="(item, index) in articlelist" :key="item.id">
        <div class="article">
          <div
            class="leftarticle"
            :style="{ width: boxwidth }"
            v-if="index % 2 === 0"
          >
            <div class="leftimg" v-if="imgpath(item.imgs) !== undefined">
              <img class="uniform-image" :src="imgpath(item.imgs)" />
            </div>
            <div class="rightinfo">
              <div class="topinfo right-title">{{ item.createTime }}</div>
              <div class="articlecontent">{{ item.content }}</div>
              <div class="articlebottom">
                <div class="info">
                  <el-avatar :src="item.user.avatar" />
                  <h3>{{ item.user.nickname }}</h3>
                </div>
                <div class="edit look">
                  <a v-if="isuserHome" :href="'/edit/' + item.id">编辑</a>
                  <a v-if="isuserHome">删除</a>
                  <a>查看详情 ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="rightarticle" :style="{ width: boxwidth }" v-else>
            <div class="rightinfo">
              <div class="topinfo left-title">{{ item.createTime }}</div>
              <div class="articlecontent">{{ item.content }}</div>
              <div class="articlebottom">
                <div class="info">
                  <el-avatar :src="item.user.avatar" />
                  <h3>{{ item.user.nickname }}</h3>
                </div>
                <div class="edit">
                  <a v-if="isuserHome" :href="'/edit/' + item.id">编辑</a>
                  <a v-if="isuserHome">删除</a>
                  <a>查看详情 ></a>
                </div>
              </div>
            </div>
            <div class="leftimg" v-if="imgpath(item.imgs) !== undefined">
              <img :src="imgpath(item.imgs)" class="uniform-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.articlesbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  .articles {
    width: 100%;
    .article {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      .rightarticle,
      .leftarticle {
        background-color: rgba(42, 42, 42, 0.379);
        margin: 10px 0;
        padding: 60px;
        box-sizing: border-box;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        .leftimg {
          width: 300px;
          border-radius: 10px;
          position: relative;
          aspect-ratio: 1; // 假设图片是正方形，根据实际图片宽高比调整此值
          overflow: hidden;
          cursor: pointer;
          // border: 3px solid white;
          .uniform-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .rightinfo {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;
          .topinfo {
            width: 100%;
          }
          .articlecontent {
            text-indent: 2em;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            // padding: 7px 0;
            margin: 10px 0;
            // box-sizing: border-box;
          }
        }
      }
      .articlecontent {
        line-height: 40px;
      }
      .articlebottom {
        // height: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        .info {
          display: flex;
          align-items: center;
        }
        .edit {
          display: flex;
          justify-content: space-between;
          padding: 20px 0 0 0;
          a {
            cursor: pointer;
            text-decoration: none;
            color: rgb(255, 208, 75);
          }
          a:hover {
            color: white;
          }
        }
        h3 {
          padding: 0 10px;
        }
      }
      .leftarticle .info {
        justify-content: end;
      }
    }
  }
}
</style>
