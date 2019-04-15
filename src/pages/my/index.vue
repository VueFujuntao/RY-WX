<template>
  <div>
    <div class="top">
      <img :src="avatarUrl" alt="avatar" class="avatarUrl">
    </div>
    <input class="input" type="text" v-model="phone" placeholder="请输入您的账号">
    <input class="input" type="password" v-model="password" placeholder="请输入您的密码">
    <button @click="login" class="button login">登入</button>
    <button @click="register"  class="button register">注册</button>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      phone: '',
      password: '',
      avatarUrl: './user.png'
    }
  },

  created () {
    wx.getUserInfo({
      success: response => {
        console.log()
        this.avatarUrl = response.userInfo.avatarUrl
      }
    })
  },
  mounted () {

  },
  methods: {
    // 登入 功能
    login () {
      if (this.phone == '' || this.password == '') return
      console.log(this.phone)
    },
    // 跳转至注册页面
    register () {
      wx.navigateTo({
        url: '../registration/main'
      })
    }
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 160px;
  position: relative;
  /* background-image: url('./user.png');
  background-position: 50%;
  background-size: 50% 100%;
  background-repeat: no-repeat; */
}
.top > img.avatarUrl {
  border-radius: 50%;
  width: 50%;
  height: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.input {
  width: 90%;
  margin: auto auto;
  border-radius: 10px;
  height: 38px;
  padding-left: 10px;
  border-bottom: 1px solid #dddddd;
  margin-top: 20px;
}
.button {
  margin-top: 20px;
  width: 90%;
  background-color: green;
  color: white;
}
</style>
