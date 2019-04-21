<template>
  <div>
    <div class="scanCode-background">
      <div class="border">
        <div class="border-border">
          <div class="jiaoyanma">校验码</div>
          <input type="password" v-model="valueData">
        </div>
        <div class="button-div">
          <button @click="getValueData">确定</button>
        </div>
      </div>
    </div>
    <div class="pointer" @click="click">
      <i></i>
      扫一扫
    </div>
  </div>
</template>

<script>
export default {
  name: 'pointer',
  data () {
    return {
      valueData: ''
    }
  },
  methods: {
    click () {
      this.$emit('toPointer', '')
    },
    getValueData () {
      this.$emit('getValueData', this.valueData)
    }
  }
}
</script>

<style scoped>

.scanCode-background {
  width: 260px;
  height: 260px;
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0%);
  border-radius: 50%;
  background-image: url("./earth.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 95%;
}

/* 背景框 */
.border {
  border: 1px solid #f3eae0;
  width: 95%;
  height: 40%;
  background-color: #fffcf9;
  border-radius: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding-top: 30px;
}

/* 框 边框 */
.border-border {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border: 1px solid #dfdedc;
  line-height: 35px;
  width: 80%;
  height: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content:space-between;
}
.border-border>input {
  color: #f15a24;
  padding-left: 10px;
}
.button-div {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
}

.button-div>button {
  width: 75px;
  left: 50%;
  height: 35px;
  line-height: 35px;
  position: absolute;
  margin-top: 45px;
  transform: translate(-50%,-50%);
  background: linear-gradient(to top, #f35e21 , #f47220);
  color: white;
  font-size: 18px;
}
.jiaoyanma {
  text-align: center;
  width: 80px;
  font-size: 16px;
}
.border-border input {
  border-left: 1px solid #dfdedc;
  height: 30px;
  line-height: 30px;
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

