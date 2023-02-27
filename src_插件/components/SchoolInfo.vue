<template>
  <div>
    <h2>学校信息</h2>
    <div>学校名称：{{ name | myslice}}</div>
    <button @click="showName">点我弹出学校名称</button>
  </div>
</template>

<script>
import Method from '../mixin'
export default {
    name: 'SchoolInfo',
    data() {
        return {
            name: '太原理工大学'
        }
    },
    mixins: [Method]
}
</script>

<style>

</style>