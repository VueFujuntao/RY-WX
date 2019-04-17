<template>
  <div class="list-content">
    <div class="user-name">用户名</div>
    <div class="table">
      <div class="tr">
        <div class="th">序号</div>
        <div class="th">SN</div>
      </div>
      <div class="tr">
        <div class="th">01</div>
        <div class="th">555467</div>
      </div>
    </div>
    <div class="bottom">
      <div class="now-number">第
        <div class="number">1</div> 页</div>
      <div class="go jian">上一页</div>
      <div class="go add">下一页</div>
      <div class="jump-to">跳转至</div>
      <div class="jump">11</div>
      <div>页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list'
}
</script>

<style scoped>
.list-content {
  position: absolute;
  height: 100%;
  width: 100%;
}
.user-name {
  border-bottom: 1px solid #bcbcbc;
  padding-bottom: 5px;
  padding-left: 5px;
}
.table {
  width: 300px;
  margin: auto;
  margin-top: 25px;
  border-top: 1px solid #c6c6c6;
  border-right: 1px solid #c6c6c6;
  border-left: 1px solid #c6c6c6;
  border-bottom: 1px solid #c6c6c6;
}
.tr {
  display: flex;
  background-color: #e6e6e6;
}
.tr>div {
  text-align: center;
  padding: 5px;
  border: 1px solid #c6c6c6;
}
.tr>div:nth-child(1) {
  border-right: 1px solid #c6c6c6;
  width: 80px;
}
.tr>div:nth-child(2) {
  width: 220px;
}
.bottom {
  position: absolute;
  bottom: 20px;
  width: 100%;
  font-size: 15px;
  display: flex;
  justify-content: space-around;
}
.bottom>div{
  height:23px;
  line-height: 23px;
  text-align: center;
}
.go {
  width: 60px;
 background-color: #f0f0f0;
}
.jump {
 background-color: #f0f0f0;
 width: 30px;
 margin-right: -20px;
}
.jump-to {
  margin-right: -20px;
}
.add {
  margin-right: -10px;
}
.jian {
  margin-right: -20px;
}
.now-number {
  width: 60px;
  display: flex;
}
.number {
  color: #a7907e;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
