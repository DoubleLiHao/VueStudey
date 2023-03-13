<template>
  <div>
    <h2>学生信息：</h2>
    <div>学生姓名：{{ name }}</div>
    <div>学生年龄：{{ age }}</div>
    <button @click="sendStudentNametest">点我给App发送学生姓名</button>
    <button @click="unbind">点击我解绑自定义事件</button>
    <button @click="demo">点我触发demo事件</button>
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
    demo() {
      this.$emit('demo')
    },
    sendStudentNametest() {
      this.$emit('sendStudentName',this.name)
    },
    unbind() {
      // 解绑一个自定义事件
      // this.$off('sendStudentName')
      // 解绑多个自定义事件
      // this.$off(['sendStudentName','demo'])
      // 解绑所有自定义事件
      this.$off()
    }
  }
}
</script>

<style scoped>
  div{
    background-color: aqua;
  }
</style>