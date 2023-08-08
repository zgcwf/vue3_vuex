import { createStore } from "vuex";

import homeModule from '../store/modules/home.js'
import scoreModule from './modules/score.js'

// vuex只有一个store：单一数据源
const store = createStore({
  state: () => ({
    root: 'root',
    counter: 10,
    level: 100,
    name: "zgc",
    address: "山东",
    friends: [
      { id: 1, name: "wlc", age: 10 },
      { id: 2, name: "wf", age: 20 },
      { id: 3, name: "cx", age: 30 },
    ],
  }),
  getters: {
    // 1. 基本使用
    doubleCounter(state) {
      return state.counter * 2;
    },
    totalAge(state) {
      return state.friends.reduce((pre, item) => {
        return pre + item.age;
      }, 0);
    },
    // 2. 在getters中使用getters
    message(state, getters) {
      return `我是${state.name}, 我所有朋友年龄的总和为 ${getters.totalAge} 岁`;
    },
    // 3. getters可以返回一个函数，调用这个函数可以传入参数
    getFriendById(state) {
      return function (id) {
        return state.friends.find((item) => item.id === id);
      };
    },
  },
  // action提交的是mutation，而不是直接变更状态
  // action可以是同步的，也可以是异步的
  actions: {
    // context: 和store实例具备相同的属性和方法，但并不是store对象
    decrementAction(context) {
      // console.log(context.state, context.getters);
      context.commit('decrement')
    },
    changeNameAction(context, payload) {
      context.commit('changeName', payload)
    },
    changeRootNameAction(context, payload) {
      console.log('changeRootNameAction', payload);
      setTimeout(() => {
        context.commit('changeRootName', payload)
      }, 1000)
    }
  },
  // mutations是Vuex修改state的唯一推荐方法，其他地方虽说也可以修改，但开发者工具无法追踪
  // mutation必须是同步的
  mutations: {
    increment(state) {
      state.counter++;
    },
    update(state, payload) {
      state.address = payload.address;
      state.level = payload.level;
      state.name = payload.name;
    },
    updateAge(state, payload) {
      state.friends[0].age = payload;
    },
    upgrade(state, payload) {
      state.level += payload;
    },
    decrement(state) {
      state.counter--;
    },
    changeName(state, payload) {
      state.name = payload
    },
    changeRootName(state, payload) {
      state.root = payload.userName
    },
  },
  modules: {
    home: homeModule,
    score: scoreModule
  }
});

export default store;
