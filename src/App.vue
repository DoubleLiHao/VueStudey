<!--
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-02-22 18:52:20
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-02-27 20:27:20
 * @FilePath: \test\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Box">
    <TopInput :addMsg="addMsg"/>
    <ListTodos 
    :Todos="Todos"
    :switchCheck="switchCheck"
    />
    <DoneTitle 
    :TodosDone="TodosDone" 
    :TodosTotal="TodosTotal"
    :DeleteCheck="DeleteCheck"
    :TodosCheckAll="TodosCheckAll"
    />
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import TopInput from './components/TopInput.vue'
import ListTodos from './components/ListTodos.vue'
import DoneTitle from './components/DoneTitle.vue'
export default {
  name: 'App',
  components: {
    TopInput,
    ListTodos,
    DoneTitle,
  },
  data() {
    return {
      Todos: [
        {id:'001',value:'睡觉',done: true},
        {id:'002',value:'学习',done: true},
        {id:'003',value:'打游戏',done: false},
      ]
    }
  },
  methods: {
    addMsg(target) {
      this.Todos.unshift({id:nanoid(),value:target.value,done: false})
      target.value =''
    },
    switchCheck(target) {
      this.Todos.forEach(item => {
        if (item.id === target.id) {
          item.done = !item.done
        }
      });
    },
    DeleteCheck() {
      this.Todos = this.Todos.filter(item => {
        return item.done == false
      })
    },
    TodosCheckAll(target) {
      this.Todos.forEach(item => {
        item.done = true
      })
      // target.checked = false
      console.log(target)
    }
  },
  computed: {
    TodosDone: function (vm) {
      return vm.Todos.reduce((pre, current) => pre+(current.done? 1 : 0), 0)
    },
    TodosTotal: function (vm) {
      return vm.Todos.length
    }
  }
}
</script>

<style scoped>
  .Box{
    border: 1px solid black;
    width: 400px;
    margin: 200px auto;
    padding: 20px;
    border-radius: 10px;
  }
</style>