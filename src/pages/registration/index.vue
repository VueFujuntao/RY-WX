<template>
  <div class="register-context">
    用户名：
    <input type="text" class="input" v-model="information.name" key="1">
    密码
    <input type="digit" class="input" v-model="information.phone">
    姓名
    <input type="text" class="input" v-model="information.company">
    手机号码
    <input type="Number" class="input" v-model="information.companyNumber">
    项目名称
    <input type="password" @input="moneyControl" class="input" v-model="information.password">
    公司名称
    <input type="password" @input="moneyControl" class="input" v-model="information.confirmPassword">
    公司地址
    <input type="password" @input="moneyControl" class="input">
    <button @click="register">注册</button>
  </div>
</template>

<script>
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
      }
    }
  },
  created () {
  },
  methods: {
    register () {
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

    }
  },
  watch: {
  }
}
</script>

<style scoped>
.input {
  border: 1px solid red;
  /* width: 80%; */
  border-radius: 10rem;
}
</style>
