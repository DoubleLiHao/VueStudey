<template>
  <div>
    <h2>学校信息</h2>
    <div>学校名称：{{ name }}</div>
  </div>
</template>

<script>
export default {
    name: 'SchoolInfo',
    data() {
        return {
            name: '太原理工大学'
        }
    }
}
</script>

<style>

</style>