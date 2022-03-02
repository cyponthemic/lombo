export default {
  state: () => ({
    enabled: true
  }),

  actions: {
    toggle({commit}) {
      commit('toggle')
    }
  },

  mutations: {
    toggle(state) {
      state.enabled = !state.enabled
    }
  }
}
