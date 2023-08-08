export default {
  namespaced: true,
  state: () => ({
    score: 100,
  }),
  getters: {
    message(state, getters, rootState) {
      console.log(state, getters, rootState);
      return `${rootState.address}`
    }
  },
  actions: {
    // 在带命名空间的模块内访问全局（root）内容
    get({ state, getters, dispatch, commit, rootState, rootGetters }) {
      console.log(state, getters, dispatch, commit, rootState, rootGetters)
    }
  },
  mutations: {
    raiseScore(state) {
      state.score++
    }
  }
}