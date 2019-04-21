import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import server from '@/server/services'

Vue.config.productionTip = false
Vue.prototype.$server = server
Vue.prototype.$store = store
App.mpType = 'app'

wx.cloud.init({
  env: 'taiyunkeji-066759',
  traceUser: true
})

const app = new Vue({App})
app.$mount()
