<template>
  <div class="content">
    <div class="scanCode" @click="scanCode">

    </div>
    <div class="text">注册/登入</div>
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
  },
  components: {
  },
  methods: {
    scanCode () {
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
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
  display: flex;
  flex-direction: column;
}
.scanCode {
  width: 100%;
  height: 80%;
  background-color: red;
}
.text {
  width: 100%;
  background-color: blue;
  height: 20%;
}
</style>
