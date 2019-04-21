<template>
  <div>
    <div class="scanCode-background">
      <div class="scanCode"  @click="scanCode">
        <div class="scancode-text">扫一扫</div>
      </div>
    </div>
    <div class="pointer" @click="click">
      <i></i>
      手工输入
    </div>
  </div>
</template>

<script>
export default {
  name: 'scancode',
  methods: {
    click () {
      this.$emit('toPointer')
    },
    // 扫一扫 功能
    scanCode () {
      wx.scanCode({
        success: (res) => {
          let cn = JSON.parse(res.result).cn
          console.log(cn)
        }
      })
    }
  }
}
</script>

<style scoped>
.scanCode-context {
  width: 100%;
  height: 100%;
}

.scanCode-background {
  width: 290px;
  height: 290px;
  position: absolute;
  left: 50%;
  top: 8%;
  transform: translate(-50%, 0%);
  border-radius: 50%;
  background-image: url("./earth.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 95%;
}

.scanCode {
  width: 70%;
  height: 70%;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  background-color: rgba(255, 249, 242, .85);
  border-radius: 50%;
  box-shadow: 0 0 10px #ead3bd;
  background-image: url("../../static/images/scanCode.png");
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: 50% 40%;
}
.scancode-text {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 20px;
  color: #f47a4c;
}
.pointer {
  position: absolute;
  bottom: 35%;
  width: 100%;
  text-align: center;
  color: #f4784a;
  padding-left: 15px;
  font-size: 18px;
}

.pointer>i {
  background-image: url('../../static/images/pointer.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 135px;
}

</style>

