<template>
  <div>
    姓名：
    <input type="text" class="input" v-model="information.name" key="1">
    电话：
    <input type="digit" class="input" v-model="information.phone">
    公司：
    <input type="text" class="input" v-model="information.company">
    公司编号：
    <input type="Number" class="input" v-model="information.companyNumber">
    密码：
      <input type="password" @input="moneyControl" class="input" v-model="information.password">
      确认密码：
      <input type="password" @input="moneyControl" class="input" v-model="information.confirmPassword">
    <button @click="register">注册</button>
    <button >登入</button>
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
      console.log(this.information.password === this.information.confirmPassword)
      if (name !== '' && phone !== '' && company !== '' && companyNumber !== '' && password !== '') {
        if (this.information.password === this.information.confirmPassword) {
          console.log('两者密码不相同')
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
