<template>
  <div class="home">
    <h2>doubleCounter:{{ $store.getters.doubleCounter }}</h2>
    <h2>totalAge:{{ $store.getters.totalAge }}</h2>
    <h2>message:{{ $store.getters.message }}</h2>

    <!-- 根据id找到对应的朋友 -->
    <h2>getFriendById:{{ $store.getters.getFriendById(2) }}</h2>

  </div>
</template>

<script>
import { } from 'vuex';
export default {
  computed: {
    name() {
      return this.$store.state.name
    },
    // 对象方式映射，映射出来的属性名不必与store中的属性名一致
    // 数组方式映射, 映射出来的属性名必须与store中的属性名一致
  }
}
</script>

<script setup>

</script>