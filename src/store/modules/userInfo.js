
const state = {
  userInfo: ''
}

const getters = {
  getUserInfo (state) {
    return state.userInfo
  }
}

const mutations = {
  setUserInfo (state, value) {
    state.userInfo = value
  },
  clearUserInfo (state) {
    state.userInfo = ''
  }
}

const actions = {
  setUserInfo (context, value) {
    context.commit('setUserInfo', value)
  },
  clearUserInfo (context) {
    context.commit('clearUserInfo')
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
