<template>
  <div>
    <h2>学生信息：</h2>
    <div>学生姓名：{{ name }}</div>
    <div>学生年龄：{{ age }}</div>
    <button @click="sendStudentName">点我给App发送学生姓名</button>
  </div>
</template>

<script>
export default {
  name: 'StudentInfo',    
  data() {
      return {
          name: '张三',
          age: 19
      }
  },
  methods: {
    sendStudentName() {
      this.$emit('sendStudentName',this.name)
    }
  }
}
</script>

<style scoped>
  div{
    background-color: aqua;
  }
</style>