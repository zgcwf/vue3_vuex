<template>
  <div class="home">
    <h2>doubleCounter:{{ doubleCounter }}</h2>
    <h2>totalAge:{{ totalAge }}</h2>
    <h2>message:{{ message }}</h2>

    <!-- 根据id找到对应的朋友 -->
    <h2>getFriendById:{{ getFriendById(2) }}</h2>
    <h2>getFriendById:{{ getFriendById(1) }}</h2>

    <button @click="update">修改</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    },
    // 对象方式映射，映射出来的属性名不必与store中的属性名一致
    // ...mapGetters({ message: "message" }),
    // 数组方式映射, 映射出来的属性名必须与store中的属性名一致
    ...mapGetters(["getFriendById"]),
  },
};
</script>

<script setup>
// 1. 直接对store进行解构
import { useStore } from "vuex";
import { computed, toRefs } from "vue";
const store = useStore();
const { totalAge } = toRefs(store.getters);
// const { totalAge } = store.getters; 非响应式

// 2. 使用封装的useState方法
// import useGetters from '../hooks/useGetters'
// const { totalAge } = useGetters(['totalAge'])

// 3. 针对某一个属性使用computed
const message = computed(() => store.getters.message);

function update() {
  console.log(store.state);
  // 不能直接修改state中的状态，必须靠提交mutation来修改
  store.commit("updateAge", 100);
}
</script>
