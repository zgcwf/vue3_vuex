<template>
  <div class="home">
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.state.name }}</h2>
    <hr>
    <!-- 数组写法 -->
    <button @click="decrementAction">-1</button>
    <button @click="changeNameAction('李白')">修改姓名</button>
    <hr>
    <!-- 对象写法 -->
    <button @click="decrement">-1</button>
    <button @click="changeName('苏轼')">修改姓名</button>
    <hr>
    <!-- setup -->
    <button @click="decrementS">-1</button>
    <button @click="changeNameS">修改姓名</button>
    <hr>
    <ul>
      <template v-for="item in $store.state.banner" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // 参数在模板传入 
    ...mapActions(['decrementAction', 'changeNameAction']),
    ...mapActions({ decrement: 'decrementAction', changeName: 'changeNameAction' })
  },
};
</script>

<script setup>
import { useStore } from 'vuex'

import useActions from '../hooks/useActions'
const { decrementAction: decrementS } = useActions(['decrementAction'])

const store = useStore();

function changeNameS() {
  store.dispatch('changeNameAction', '杜甫')
}

// 发送网络请求（action中可以通过返回一个promise的方法传递数据到调用它的地方）
store.dispatch('fetchHomeMultidataAction')
// store.dispatch('fetchHomeMultidataAction').then(res => console.log('res', res))


</script>
