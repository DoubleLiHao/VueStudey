<!--
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-02-27 20:18:13
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-02-28 21:21:00
 * @FilePath: \test\src\components\Todo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Box">
    <label>
      <input type="checkbox" :checked="Todo.done" :id="Todo.id" @click="switchCheck($event.target)">
      <span class="text">{{ Todo.value }}</span>
    </label>
    <button @click="deleteTodo(Todo.id)">删除</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  props: ["Todo"],
  methods: {
    switchCheck(target) {
      this.$bus.$emit('switchCheck',target)
    },
    deleteTodo(id) {
      pubsub.publish('deleteTodo',id)
    }
  }
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  label{
    margin-left: 10px;
  }
  .text{
    margin-left: 10px;
    font-size: 13px;
  }
  button{
    margin-right: 10px;
    border-radius: 10px;
    width: 50px;
    height: 30px;
    border: 1px solid rgba(153, 137, 137, 0.5);
    background: rgb(217, 28, 28);
    color: white;
    display: none;
  }
  .Box:hover{
    background-color: aqua;
  }
  .Box:hover > button{
    display: block;
  }
</style>