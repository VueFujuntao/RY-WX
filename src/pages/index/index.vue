<template>
  <div class="content">
    <div class="font" @click="toLoginPage">代理商入口</div>
    <div class="scanCode-context">
      <div class="scanCode-background">
        <div class="scanCode" @click="scanCode"></div>
      </div>
    </div>
    <div class="text">
        <div>| |||</div>
        <div class="text-size">校验码</div>
        <div class="input-div">
          <input type="password" class="input">
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  created () {},
  mounted () {
    wx.setStorage({
      key: 'username',
      data: 'ew'
    })
    wx.getStorage({
      key: 'username',
      success (res) {
        console.log(res)
      }
    })
    this.$server.getlist().then(res => {
      console.log(res)
      const username = this.$store.getters.getUserInfo
      console.log(username)
      this.$store.dispatch('invokePushItems', '2312')
      console.log(this.$store.getters.getUserInfo)
    })
  },
  methods: {
    // 扫一扫 功能
    scanCode () {
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    },
    // 跳转至 登入页面
    toLoginPage (e) {
      wx.navigateTo({
        url: '../my/main'
      })
    },
    // 跳转至 注册页面
    toRegisterPage () {
      wx.navigateTo({
        url: '../registration/main'
      })
    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  height: 100%;
  width: 100%;
}

.scanCode-context {
  width: 100%;
  height: 100%;
  background-color: #fef1e2;
}

.scanCode-background {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%);
  /* background-color: white; */
  border-radius: 50%;
  /* animation: scanCode 0.00001s linear infinite; */
}

.scanCode {
  width: 90%;
  height: 90%;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  background-color: #fffdfa;
  border-radius: 50%;
  box-shadow:  0 0 10px #ead3bd;
}

@-webkit-keyframes scanCode{
  0%{
    transform:rotate(0deg);
    transform-origin: 50% 50%;
  }

  25%{
    transform:rotate(90deg);
    transform-origin: 50% 50%;
  }

  50%{
    transform:rotate(180deg);
    transform-origin: 50% 50%;
  }

  75%{
    transform:rotate(270deg);
    transform-origin: 50% 50%;
  }

  100%{
    transform:rotate(360deg);
    transform-origin: 50% 50%;
  }
}

.text {
  width: 100%;
  height: 13%;
  position: absolute;
  background-color: white;
  bottom: 30%;
  /* padding: 10px 20px; */
  display: flex;
  flex-direction: row ;
  align-items: center;
  justify-content: center;
}
.text-size {
  margin-left: 10px;
  font-size: 15px;
}
.input-div {
  height: 25px;
  margin-left: 10px;
}
.input {
  width: 140px;
  border: 1px solid #dddddd;
  color: #f15a24;
  height: 25px !important;
  padding-left: 6px;
  border-radius: 5px;
}
.button-div {
  height: 25px;
}
.button-div>button {
  height: 25px;
  line-height: 25px;
  width: 60px;
  padding-left: 0;
  padding-right: 0;
  font-size: 16px;
}
.font {
  position: absolute;
  right: 0;
  padding-top: 10px;
  padding-right: 10px;
  color: #f15a24;
  font-size: 18px;
}
</style>
