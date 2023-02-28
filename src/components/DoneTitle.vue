<!--
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-02-27 22:04:16
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-02-28 20:53:04
 * @FilePath: \test\src\components\DoneTitle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="box" v-show="TodosTotal">
      <div>
        <input type="checkbox" @click="TodosCheckAll($event.target)" :checked="isAll">
        <span>已完成{{ TodosDone }}</span>
        <span>/</span>
        <span>全部{{ TodosTotal }}</span>
      </div>
      <div>
        <button @click="DeleteCheck">清除已完成任务</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Todos", "DeleteCheck", "TodosCheckAll"],
  computed: {
    TodosDone: function () {
      return this.Todos.reduce((pre, current) => pre+(current.done? 1 : 0), 0)
    },
    TodosTotal: function () {
      return this.Todos.length
    },
    isAll() {
      return this.TodosTotal === this.TodosDone ? true : false
    }
  }
}
</script>

<style scoped>
  .box{
    width: 400px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input{
    margin-left: 10px;
  }
  span{
    margin-left: 10px;
    letter-spacing: 2px;
  }
  button{
    border-radius: 10px;
    border: 1px solid transparent;
    padding: 10px;
    color: white;
    background-color: rgb(182, 9, 9);
  }
</style>