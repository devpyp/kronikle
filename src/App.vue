<template>
  <div id="app">
    <Aside />
    <History />
  </div>
</template>

<style>
</style>

<script>
import Aside from './components/Aside';
import History from './views/history';
export default {
  components: {
    Aside,
    History
  }
}
</script>

<style scoped>
  #app {
    height: 100%;
  }
</style>