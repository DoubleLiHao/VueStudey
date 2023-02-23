<template>
  <div>
    <h2>学生信息：</h2>
    <div>学生姓名：{{ name }}</div>
    <div>学生年龄：{{ age }}</div>
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
    }
}
</script>

<style>

</style>