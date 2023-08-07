<template>
  <div class="home">
    <!-- 计算属性使用store -->
    <h2> name: {{ name }}</h2>
    <!-- mapState映射: 对象语法 -->
    <h2> myLevel: {{ myLevel }}</h2>
    <h2> myAddress: {{ myAddress }}</h2>
    <!-- mapState映射: 数组语法 -->
    <h2> level: {{ level }}</h2>
    <h2> address: {{ address }}</h2>
    <!-- mapState映射: setup -->
    <h2> sLevel: {{ sLevel }}</h2>
    <h2> sAddress: {{ sAddress }}</h2>

    <button @click="update">修改</button>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    name() {
      return this.$store.state.name
    },
    // 对象方式映射，映射出来的属性名不必与store中的属性名一致
    ...mapState({ myLevel: 'level', myAddress: 'address' }),
    // 数组方式映射, 映射出来的属性名必须与store中的属性名一致
    ...mapState(['level', 'address']),
  }
}
</script>

<script setup>
import useState from '../hooks/useState'

// 1. 直接对store进行解构
import { useStore } from 'vuex';
// import { toRefs } from 'vue';
const store = useStore()
// const { level, address } = toRefs(store.state)

// 2. 使用封装的useState方法
const { level: sLevel, address: sAddress } = useState(['level', 'address'])

function update() {
  console.log(store.state);
  // 不能直接修改state中的状态，必须靠提交mutation来修改
  store.commit('update', {
    name: 'wf',
    level: 120,
    address: '北京'
  })
}
</script>