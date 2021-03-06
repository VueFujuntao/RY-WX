/**
 * Created by tengteng on 18/7/17.
 */

// vuex

import Vue from 'vue'
import Vuex from 'vuex'
import UserInfo from './modules/userInfo'
import Projects from './modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserInfo: UserInfo,
    Projects: Projects
  }
})
