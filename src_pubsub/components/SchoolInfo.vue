<!--
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-02-22 19:27:24
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-02-22 20:10:13
 * @FilePath: \test\src\components\SchoolInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h2>学校信息:</h2>
        <div>学校名称:{{ name }}</div>
        <div>学校地址：{{ adress }}</div>
        <div>收到了学生传过来的姓名：{{ StuName }}</div>
        <button @click="sendSchName">点我给app传学校名称</button>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
    name: 'SchoolInfo',
    data() {
        return {
            name: '太原理工',
            adress: '山西省太原市',
            StuName: ''
        }
    },
    methods: {
        getStuName(subName,name) {
            this.StuName = name
        },
        sendSchName() {
            pubsub.publish('getSchName',this.name)
        }
    },
    mounted() {
        this.pubId = pubsub.subscribe('getStuName',this.getStuName)
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    }
}
</script>
<style scoped>
    div{
        background-color: antiquewhite;
    }
</style>