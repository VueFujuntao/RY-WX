<template>
  <div class="content">
    <div class="font" @click="toLoginPage">代理商入口</div>
    <Scancode v-if="compnoentss" @getValueData="getValueData" @toPointer="toPointer"></Scancode>
    <Pointer v-if="!compnoentss" @getValueData="getValueData" @toPointer="toPointer"></Pointer>
    <div class="text">
      <div class="erweima"></div>
      <div class="text-size">
        激活码:
      </div>
      <div class="input-div">
        <input  class="input" v-model="valueData" disabled>
      </div>
    </div>
  </div>
</template>

<script>
import Scancode from '../../components/scancode.vue'
import Pointer from '../../components/pointer.vue'

export default {
  data () {
    return {
      compnoentss: true,
      valueData: '',
      userBool: false
    }
  },
  created () {},
  mounted () {
    this.getUserStorage()
  },
  methods: {
    // 跳转至 登入页面
    toLoginPage (e) {
      console.log(this.userBool)
      if (this.userBool === true) {
        wx.navigateTo({
          url: '../list/main'
        })
      } else {
        wx.navigateTo({
          url: '../login/main'
        })
      }
    },
    // 手工输入
    toPointer (value) {
      this.compnoentss = !this.compnoentss
      this.valueData = value
    },
    // 获取得到的校验码
    getValueData (value) {
      this.valueData = value
    },
    // 查找缓存
    getUserStorage () {
      let that = this
      wx.getStorage({
        key: 'userInfo',
        success (res) {
          console.log(res)
          if (res.errMsg === 'getStorage:ok') {
            that.$store.dispatch('setUserInfo', res.data)
            that.userBool = true
          }
        }
      })
    }
  },
  components: {
    Scancode,
    Pointer
  },
  onShow () {
    console.log(123)
    this.getUserStorage()
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url('../../../static/images/background.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.text {
  width: 100%;
  height: 13%;
  position: absolute;
  background-color: white;
  bottom: 20%;
  display: flex;
  flex-direction: row ;
  align-items: center;
  justify-content: center;
}
.text-size {
  margin-left: 10px;
  font-size: 18px;
}
.input-div {
  height: 25px;
  margin-left: 10px;
}
.input {
  width: 140px;
  border: none;
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
  margin-right: 10px;
  color: #d2bea7;
  font-size: 18px;
  background-image: url('./daili.png');
  background-repeat: no-repeat;
  background-position: 100% 80%;
  background-size: 7%;
}

.erweima {
  width: 38px;
  height: 28px;
  background-image: url('./erweima.png');
  background-repeat: no-repeat;
}
</style>
