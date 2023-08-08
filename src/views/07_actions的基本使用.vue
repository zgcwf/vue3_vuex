<template>
  <div class="home">
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.state.name }}</h2>
    <button @click="decrement">-1</button>
    <button @click="changeName">修改姓名</button>
  </div>
</template>

<script>

export default {
  methods: {
    decrement() {
      this.$store.dispatch('decrementAction')
    },
    changeName(){
      this.$store.dispatch('changeNameAction','李白')
    }
  },
};
</script>

<script setup>

</script>
