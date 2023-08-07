import { createStore } from "vuex";

const store = createStore({
  state: () => ({
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
  },
});

export default store;
