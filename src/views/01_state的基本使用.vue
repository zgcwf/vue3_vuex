<template>
  <div class="home">
    <!-- 模板中使用store -->
    <h2> Home当前计数: {{ $store.state.counter }}</h2>
    <h2> 解构当前计数: {{ counter }}</h2>
    <h2> 计算属性当前计数: {{ sum }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  computed: {
    sum() {
      return this.$store.state.counter
    }
  }
}
</script>

<script setup>
// script中使用store
import { useStore } from 'vuex';
import { toRefs } from 'vue';

const store = useStore()

// 注意，直接解构或者赋值后的属性并非是响应式的
/**
 * 错误用法：
 * const {counter} = store.state
 * const counter = store.state.counter
 */
// 正确用法：解构数据用toRefs()方法包裹
const { counter } = toRefs(store.state)

function increment() {
  console.log(store.state.counter);
  // 不能直接修改state中的状态，必须靠提交mutation来修改
  store.commit('increment')
}
</script>