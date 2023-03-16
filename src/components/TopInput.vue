<!--
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-02-27 20:16:01
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-03-14 08:40:22
 * @FilePath: \test\src\components\TopInput.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <input type="text" class="msg_in" @keydown.enter="addMsgSon($event.target)" placeholder="请输入待办事项">
  </div>
</template>

<script>
export default {
  methods: {
    addMsgSon(target) {
      console.log('子组件',this)
      this.$emit('addMsg',target)
    }
  }
}
</script>

<style scoped>
    .msg_in{
        width: 387px;
        height: 30px;
        line-height: 25px;
        font-size: 13px;
        border-radius: 10px;
        border: 1px solid ;
        padding-left: 10px;
    }

    .box{
      margin: 0 auto 20px;
    }
</style>