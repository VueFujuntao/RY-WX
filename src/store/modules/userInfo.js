
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
  }
}

const actions = {
  setUserInfo (context, value) {
    context.commit('setUserInfo', value)
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
