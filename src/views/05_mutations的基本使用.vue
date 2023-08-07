<template>
  <div class="home">
    <h2>{{ $store.state.level }}</h2>
    <button @click="upgrade">升级</button>
  </div>
</template>

<script>
export default {
  methods: {
    upgrade() {
      this.$store.commit("upgrade", 1);
    },
  },
};
</script>

<script setup></script>
