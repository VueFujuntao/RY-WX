<template>
  <div>
    姓名：
    <input type="text" class="input" v-model="name">
    电话：
    <input type="text" class="input" v-model="phone">
    公司：
    <input type="text" class="input" v-model="company">
    公司编号：
    <input type="Number" class="input" v-model="companyNumber">
    密码：
    <input type="Number" class="input" v-model="password">
    <button @click="register">注册</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '111',
      phone: '',
      company: '',
      companyNumber: '',
      password: ''
    }
  },
  created () {
  },
  methods: {
    register () {
      console.log(this.password)
    }
  }
}
</script>

<style scoped>
.input {
  border: 1px solid red;
}
</style>
