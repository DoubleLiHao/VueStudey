<template>
  <div id="app">
    <TopBanner></TopBanner>
    <!-- 使用自定义事件的方式进行子组件对父组件的数据传输 -->
    <StudentInfo @sendStudentName="sendStudentName" @demo="m1"></StudentInfo>
    <!-- 用props的方式进行子组件对父组件的数据传输 -->
    <SchoolInfo :sendSchoolName="sendSchoolName"></SchoolInfo>
    <!-- 用ref的方式实现自定义事件 -->
    <StudentInfo ref="Student"></StudentInfo>
  </div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo.vue'
import TopBanner from './components/TopBanner.vue'
import StudentInfo from './components/StudentInfo.vue'
export default {
  name: 'App',
  components: {
    SchoolInfo,
    StudentInfo,
    TopBanner
  },
  methods: {
    m1() { 
      console.log('demo事件触发了')
    },
    sendSchoolName(name) {
      console.log('App收到了学校传的名称',name)
    },
    sendStudentName(name) {
      console.log('触发了自定义事件')
      console.log("App收到了学生传的名字：",name)
    }
  },
  mounted() {
    this.$refs.Student.$on('sendStudentName', function () { 
      console.log(this.sendStudentNametest)
    })
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
