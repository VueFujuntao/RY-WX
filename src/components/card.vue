<template>
  <div class="table-card">
    <div class="card-bord">
      <div class="close" @click="close"></div>
      <div class="success-logo"></div>
      <div class="success">您已注册成功！</div>
      <hr class="hr">
      <div class="text">请联系浙江泰源科技有限公司进行授权!</div>
      <div class="text icon">客服电话 15767766009</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('closeSuccess')
    }
  }
}
</script>

<style>
.table-card {
  width: 100%;
  height: 100%;
  background-color: rgba(128,128,128, 0.5);
  z-index: 1000;
  position: absolute;
}
.card-bord {
  height: 180px;
  width: 200px;
  background: #fba10e;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 8px;
  transform: translate(-50%, -100%);
}
.close {
  width: 15px;
  height: 15px;
  background-image: url('./close.png');
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  right: 5px;
  top: 5px;
}
.success-logo {
  margin-top: 23px;
  width: 100%;
  height: 60px;
  background-image: url('./success-logo.png');
  background-repeat: no-repeat;
  background-position:  50% 50%;
  background-size: 35%;
}
.success {
  margin-top: 10px;
  text-align: center;
  color: white;
  font-size: 15px;
  padding-left: 10px;
}
.text {
  font-size: 10px;
  text-align: center;
}
.hr {
  height: 2px;
  background-color: white;
  width: 45%;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 10px;
}
.icon {
  background-image: url('./iphone.png');
  background-repeat: no-repeat;
  background-size: 15px 100%;
  background-position: 28px;
}
</style>
