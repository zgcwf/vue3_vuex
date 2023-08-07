<template>
  <div class="app">
    <h2>App当前计数:{{ $store.state.counter }}</h2>
    <my-home></my-home>
  </div>
</template>

<script setup>
// import MyHome from './views/01_store的基本使用.vue'
// import MyHome from './views/02_state与mapState.vue'
import MyHome from './views/MyHome.vue'

</script>

<style></style>
