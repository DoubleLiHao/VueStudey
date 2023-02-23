<template>
  <div id="app">
    <TopBanner></TopBanner>
    <img alt="Vue logo" src="./assets/logo.png">
    <SchoolInfo></SchoolInfo>
  </div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo.vue'
import TopBanner from './components/TopBanner.vue'
export default {
  name: 'App',
  components: {
    SchoolInfo,
    TopBanner
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
