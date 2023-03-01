<!--
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-02-22 18:52:20
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-03-01 20:53:28
 * @FilePath: \test\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Box">
    <TopInput :addMsg="addMsg"/>
    <ListTodos 
    :Todos="Todos"
    :switchCheck="switchCheck"
    :deleteTodo = "deleteTodo"
    />
    <DoneTitle 
    :Todos="Todos"
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
      Todos: JSON.parse(localStorage.getItem("Todos")) || []
    }
  },
  watch: {
    Todos: {
      deep: true,
      handler(){
        localStorage.setItem('Todos', JSON.stringify(this.Todos))
      }
    }
  },
  methods: {
    addMsg(target) {
      if (target.value.trim().length > 0) {
        this.Todos.unshift({ id: nanoid(), value: target.value.trim(), done:false })
      } else alert("输入不能为空")
      target.value =''
    },
    deleteTodo(id) {
      this.Todos.forEach((item,index) => {
        if(item.id === id) this.Todos.splice(index,1)
      })
    },
    switchCheck(target) {
      this.Todos.forEach(item => {
        if (item.id === target.id) item.done = !item.done
      });
    },
    DeleteCheck() {
      this.Todos = this.Todos.filter(item => item.done == false)
    },
    TodosCheckAll(target) {
       this.Todos.forEach(item => item.done = target.checked? true : false)
    }
  },
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