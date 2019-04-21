
const state = {
  projects: []
}

const getters = {
  getProjects (state) {
    return state.projects
  }
}

const mutations = {
  mutationProjects (state, value) {
    state.projects = value
  }
}

const actions = {
  pushProjects (context, value) {
    context.commit('mutationProjects', value)
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
