<template>
  <div class="app">
    <h2>App当前计数:{{ $store.state.counter }}</h2>
    <hr />
    <my-home></my-home>
  </div>
</template>

<script setup>
// import MyHome from './views/01_state的基本使用.vue'
// import MyHome from './views/02_mapState的基本使用.vue'
// import MyHome from './views/03_getters的基本使用.vue'
// import MyHome from './views/04_mapGetters的基本使用.vue'
// import MyHome from "./views/05_mutations的基本使用.vue";
import MyHome from "./views/06_mapMutations的基本使用.vue";
</script>

<style></style>
