<template>
  <div id="app">
    <div>学校名称：{{ SchName }}</div>
    <TopBanner></TopBanner>
    <StudentInfo></StudentInfo>
    <SchoolInfo ></SchoolInfo>
  </div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo.vue'
import TopBanner from './components/TopBanner.vue'
import StudentInfo from './components/StudentInfo.vue'
import pubsub from 'pubsub-js'
export default {
  name: 'App',
  components: {
    SchoolInfo,
    StudentInfo,
    TopBanner
  },
  data() {
    return {
      SchName: ''
    }
  },
  methods: {
    getSchName(subName,name) {
      this.SchName = name
    },
  },
  mounted() {
    pubsub.subscribe('getSchName',this.getSchName)
  }
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
  background-color: black;
}
</style>
