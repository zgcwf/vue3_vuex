<template>
  <div class="home">
    <h2>{{ $store.state.level }}</h2>
    <!-- 数组写法 -->
    <button @click="upgrade(1)">升级</button>
    <!-- 对象写法 -->
    <button @click="myUpgrade(1)">升级</button>
    <!-- 在setup中使用 -->
    <button @click="sUpgrade(1)">升级</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    // 参数在模板传递
    // 数组写法
    ...mapMutations(["upgrade"]),
    // 对象写法
    ...mapMutations({ myUpgrade: "upgrade" }),
  },
};
</script>

<script setup>
import useMutations from "../hooks/useMutations";
const { upgrade: sUpgrade } = useMutations(["upgrade"]);
</script>
