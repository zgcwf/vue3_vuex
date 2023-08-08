<template>
  <div class="home">
    <h2>全局属性root：{{ $store.state.root }}</h2>
    <h2>score模块中的score：{{ $store.state.score.score }}</h2>
    <h2>score模块中的info：{{ $store.getters['score/message'] }}</h2>
    <button @click="add">+1</button>
    <button @click="change">更改全局属性</button>
    <ul>
      <template v-for="item in $store.state.home.banner" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<script setup>
import { useStore } from 'vuex'

const store = useStore();

// 发送网络请求（action中可以通过返回一个promise的方法传递数据到调用它的地方）
store.dispatch('home/fetchHomeMultidataAction')
// store.dispatch('fetchHomeMultidataAction').then(res => console.log('res', res))

const add = () => {
  store.commit('score/raiseScore')
}

// 触发全局store中的action或者mutation方法
// commit('rootStore中的mutation方法名', '参数', { root: true })
const change = () => {
  // 直接触发commit
  store.commit('changeRootName', { userName: 'admin' }, { root: true })

  // 触发全局的dispatch
  store.dispatch('changeRootNameAction', { userName: 'role' }, { root: true })
}
</script>
