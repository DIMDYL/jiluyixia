<script setup>
import { ref, onMounted } from 'vue'
import { lookarticle } from '@/apis/userapis.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const article = ref({})
const user = ref({})
onMounted(async () => {
  const data = await lookarticle(route.params.id)
  data.data.imgs = JSON.parse(data.data.imgs)
  article.value = data.data
  user.value = data.data.user
})
</script>
<template>
  <div class="look">
    <div class="lookarticle">
      <div class="userinfo">
        <el-avatar :src="user.avatar" />
        <h3>{{ user.nickname }}</h3>
      </div>
      <p>{{ article.createTime }}</p>
      <div class="word">
        {{ article.content }}
      </div>
      <div class="imgs" v-for="item in article.imgs" :key="item.url">
        <img :src="item.url" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.look {
  margin-top: 77px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .lookarticle {
    width: 90%;
    .userinfo {
      display: flex;
      padding: 10px 0;
      align-items: center;
      h3 {
        padding: 0 10px;
      }
    }
    .word {
      padding: 20px 0;
      line-height: 40px;
      text-indent: 2em;
    }
    .imgs {
      width: 100%;
      padding: 10px 0;
      img {
        width: 100%;
        border: 20px solid white;
        border-radius: 10px;
      }
    }
  }
}
</style>
