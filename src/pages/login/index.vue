<template>
  <div class="login-content">
    <h1 class="logo">
    </h1>
    <div class="logo-text">欢迎登陆泰源人员管理</div>
    <div class="input">
      <div class="input-div">
        <i class="user icon"></i>
        <input type="text" v-model="username">
      </div>
    </div>
    <div class="input">
      <div class="input-div">
        <i class="password icon"></i>
        <input type="password" v-model="password">
      </div>
    </div>
    <div class="buttons">
      <button class="login" @click="login">登录</button>
      <button class="register" @click="register">注册</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 登入 功能
    login () {
      let that = this
      if (that.username == '' || that.password == '') {
        return wx.showModal({
          content: '用户名或密码不能为空'
        })
      }
      // 初始化
      const db = wx.cloud.database()
      db.collection('user').where({
        username: that.username,
        password: that.password
      }).get({
        success: function (res) {
          // 登录失败
          if (res.data.length === 0) {
            // 弹框 登入失败
            wx.showModal({
              content: '用户名或密码错误'
            })
          } else {
            // 登录成功 跳转至SN页面 保存用户名
            that.$store.dispatch('setUserInfo', res.data[0])
            wx.setStorage({
              key: 'userInfo',
              data: res.data[0]
            })
            // 重定向 不能返回
            wx.redirectTo({
              url: '../list/main'
            })
          }
        },
        fail: function (res) {
          console.log(res)
        }
      })
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
.login-content {
  position: absolute;
  background-image: url('./background.png');
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
.logo {
  width: 100%;
  height: 80px;
  background-image: url('./logo.png');
  background-repeat: no-repeat;
  background-size: 13%;
  background-position: 50%;
  margin-top: 50px;
}

.logo-text {
  text-align: center;
  font-size: 16px;
  margin-bottom: 30px;
}

.input {
  height: 40px;
  margin-top: 20px;
}

.input-div {
  border: 1px solid #dfdfdf;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  height: 40px;
  display: flex;
  background-color: white;
}

.input-div > input {
  height: 80%;
  border-left: 1px solid #dfdfdf;
  margin-top: 3px;
  padding-left: 6px;
  color: #f15a24;
}

.icon {
  width: 40px;
  height: 40px;
  background-image: url('./user.png');
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 50%;
}

.password {
  background-image: url('./password.png');
}

.user {
  background-image: url('./user.png');
}

.buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.buttons > button {
  margin: 0;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  color: white;
  border: none;
}
.login {
  margin-right: 3px !important;
  background: linear-gradient(to bottom, #f47320 , #f35e21);
}
.register {
  margin-left: 3px !important;
  background: linear-gradient(to bottom, #cccccc , #cccccc);
}
</style>
