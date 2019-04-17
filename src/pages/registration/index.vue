<template>
  <div class="register-context">
    <!-- 注册成功 弹板 -->
    <Card v-if="closeSuccessBool" @closeSuccess="closeSuccess"></Card>
    <div class="hr-top"></div>
    <div class="hr-t"></div>
    <div class="form">
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">用户名</span>
        <input type="text" class="input" v-model="information.name">
      </div>
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">密码</span>
        <input type="password" class="input" v-model="information.phone">
      </div>
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">姓名</span>
        <input type="text" class="input" v-model="information.company">
      </div>
     <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">手机号码</span>
        <input type="Number" class="input" v-model="information.companyNumber">
     </div>
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">项目名称</span>
        <input type="text" @input="moneyControl" disabled class="input" v-model="information.password">
        <i class="select"></i>
      </div>
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">公司名称</span>
        <input type="text" @input="moneyControl" disabled class="input" v-model="information.confirmPassword">
        <i class="select"></i>
      </div>
      <button class="register" @click="register">确定</button>
    </div>
  </div>
</template>

<script>
import Card from '../../components/card.vue'

export default {
  data () {
    return {
      information: {
        name: '',
        phone: '',
        company: '',
        companyNumber: '',
        password: '',
        confirmPassword: ''
      },
      closeSuccessBool: true
    }
  },
  methods: {
    register () {
      this.closeSuccessBool = true
      let { name, phone, company, companyNumber, password } = this.information
      if (name !== '' && phone !== '' && company !== '' && companyNumber !== '' && password !== '') {
        if (this.information.password === this.information.confirmPassword) {
          this.$server.registerUser({'username': 'czq1111', 'password': 'qwer123456'}).then(response => {
            if (response.code === 200) {
              console.log(response)
              console.log(this)
            }
          })
        }
      }
    },
    moneyControl (e) {
    },
    // 关闭 注册成功弹板
    closeSuccess () {
      this.closeSuccessBool = false
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
/* 线 */
.hr-top {
  border: .5px solid #dddddd;
}

/* 渐变色线 */
.hr-t {
  width: 50%;
  height: 3px;
  margin: 0 auto;
  background: linear-gradient(to right, #27f29b , #08a4f8);
}

/* 表单 div */
.form {
  margin: 0 5%;
  margin-top: 8%;
}

/* 单个input div */
.form-item {
  height: 50px;
  position: relative;
}

/* input */
.form-item>input {
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  width: 235px;
  height: 35px;
  color: #f04e15;
  position: absolute;
  right: 0;
  top: 0;
  padding-left: 6px;
}
span.text {
  margin-left: 1px;
  line-height: 40px;
}
/* 星号 */
.item-i {
  color: #dc454b;
  display: initial;
}

/* 注册按钮 */
.register {
  background: linear-gradient(to right, #f47120 , #f36121);
  color: white;
  width: 30%;
  margin-top: 35px;
  line-height: 35px;
}
/* 选择按钮 */
.select {
  width: 28px;
  height: 15px;
  background-image: url('./select.png');
  background-repeat: no-repeat;
  background-size: 90%;
  position: absolute;
  top: 15px;
  right: 5px;
}
</style>
