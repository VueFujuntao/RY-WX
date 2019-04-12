import Vue from 'vue'
import App from './App'
import store from './store'
import server from '@/server/services'

Vue.config.productionTip = false
Vue.prototype.$server = server
App.mpType = 'app'

const app = new Vue({App, store})
app.$mount()
