<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { updateuser } from '@/apis/userapis.js'
import { getuserinfo } from '@/apis/userapis.js'
const router = useRouter()
const img = ref(null)
const path = ref({})
const userinfo = ref({})
onMounted(async () => {
  const data = await getuserinfo()
  userinfo.value = data.data
  path.value = userinfo.value.avatar
  user.value = {
    newpassword: '',
    username: userinfo.value.username,
    oldpassword: '',
    confirmpassword: '',
    nickname: userinfo.value.nickname,
    id: userinfo.value.id
  }
})
const user = ref({})
const upload = () => {
  img.value.click()
  console.log(1)
}
const goback = () => {
  router.push('/user')
}
const imgChange = () => {
  const file = img.value.files[0]
  console.log(file)
  if (file) {
    const imgURL = window.URL.createObjectURL(file)
    console.log(imgURL)
    path.value = imgURL
  }
}
const update = () => {
  let fd = new FormData()
  fd.append('file', img.value.files[0])
  fd.append('id', userinfo.value.id)
  fd.append('oldpassword', user.value.oldpassword)
  fd.append('nickname', user.value.nickname)
  fd.append('newpassword', user.value.newpassword)
  fd.append('confirmpassword', user.value.confirmpassword)
  updateuser(fd)
}
</script>
<template>
  <div class="updateuser">
    <!-- <h1 style="padding: 20px 0">修改信息</h1>/ -->
    <div class="avatar">
      <el-avatar style="width: 100px; height: 100px" :src="path" />
      <div class="updateavatar" @click="upload">
        <el-icon><CameraFilled /></el-icon>
        <p>更换头像</p>
      </div>
      <input @change="imgChange" style="display: none" type="file" ref="img" />
    </div>
    <el-form
      label-position="top"
      label-width="auto"
      :model="user"
      style="max-width: 600px"
    >
      <el-form-item label="用户名">
        <el-input disabled v-model="user.username" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="user.nickname" />
      </el-form-item>
      <el-form-item label="原密码">
        <el-input
          type="password"
          placeholder="不修改请留空"
          v-model="user.oldpassword"
        />
      </el-form-item>
      <el-form-item label="新密码">
        <el-input placeholder="不修改请留空" v-model="user.newpassword" />
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input placeholder="不修改请留空" v-model="user.confirmpassword" />
      </el-form-item>
      <el-form-item>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <el-button @click="goback" v-preventReClick>返回</el-button>
          <el-button type="primary" @click="update" v-preventReClick
            >保存</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less" scoped>
.updateuser {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #ffd04b;
  }
  .avatar {
    cursor: pointer;
    position: relative;
    .updateavatar {
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0px;
      bottom: 0px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.493);
      justify-content: center;
    }
  }
}
</style>
