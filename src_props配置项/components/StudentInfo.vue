<template>
  <div>
    <h2>{{ msg }}</h2>
    <div>学生姓名：{{ name }}</div>
    <div>学生性别：{{ sex }}</div>
    <div>学生年龄：{{ age }}</div>
  </div>
</template>

<script>
export default {
    name: 'StudentInfo',
    data() {
        return {
            msg: '这是学生信息',
        }
    },
    // props:['name','sex','age'] //简单写法
    // 限制参数类型
    // props: {     
    //     name: String,
    //     sex: String,
    //     age: Number
    // }
    // 限制类型 必要性 默认值
    props: {
        name: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 19
        }
    }
}
</script>

<style>

</style>