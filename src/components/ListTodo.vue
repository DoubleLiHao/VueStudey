<!--
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-02-27 20:18:13
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-02-27 20:18:19
 * @FilePath: \test\src\components\Todo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Box">
    <label>
      <input type="checkbox" :checked="Todo.done" :id="Todo.id" @click="switchCheck($event.target)">
      <span class="text">{{ Todo.value }}</span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props:["Todo","switchCheck"]
}
</script>

<style scoped>
  .Box{
    border: 1px solid rgba(153, 137, 137, 0.5);
    width: 400px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    margin-bottom: 5px;
  }
  label{
    margin-left: 10px;
  }
  .text{
    margin-left: 10px;
    font-size: 13px;
  }
</style>