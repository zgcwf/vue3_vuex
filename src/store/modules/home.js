
export default {
  // 默认情况下，模块内部的 action 和 mutation 与 getters 都是注册在全局命名空间的
  // 当模块开启namespaced后，它的所有 getter、action 及 mutation 都变成模块内部的了
  namespaced: true,
  state: () => ({
    banner: [],
    recommend: []
  }),
  getters: {},

  actions: {
    fetchHomeMultidataAction(context) {
      fetch("http://123.207.32.32:8000/home/multidata")
        .then(res => res.json())
        .then(res => {
          context.commit('changeBanner', res.data.banner.list)
          context.commit('changeRecommend', res.data.recommend.list)
        })

      // eslint-disable-next-line no-async-promise-executor
      // return new Promise(async (resolve) => {
      //   const res = await fetch("http://123.207.32.32:8000/home/multidata")
      //   const data = await res.json()
      //   context.commit('changeBanner', data.data.banner.list)
      //   context.commit('changeRecommend', data.data.recommend.list)
      //   resolve('传递的数据')
      // })
    }
  },
  mutations: {
    changeBanner(state, pyload) {
      state.banner = pyload
    },
    changeRecommend(state, pyload) {
      state.recommend = pyload
    },
  },
}
