<template>
  <div>
    <h2>{{ msg }}</h2>
    <div>学生姓名：{{ name }}</div>
    <div>学生性别：{{ sex }}</div>
    <div>学生年龄：{{ age }}</div>
    <div v-fbind="color">测试自定义指令</div>
    <button @click="showName">点我弹出学生名称</button>
    <button @click="hello">你好</button>
  </div>
</template>

<script>
import Method from '../mixin'
export default {
    name: 'StudentInfo',
    data() {
        return {
            msg: '这是学生信息',
            name: '张三',
            age: 19,
            sex: 'male',
            color: 'red'
        }
    },
    mixins: [Method],
    methods: {
        showName() {
            alert('本身的为主')
        }
    }
}
</script>

<style>

</style>