
const state = {
  userName: ''
}

const getters = {
  getUserInfo (state) {
    return state.userName
  }
}

const mutations = {
  mutationUserInfo (state, value) {
    state.userName = value
  }
}

const actions = {
  invokePushItems (context, value) {
    context.commit('mutationUserInfo', value)
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
