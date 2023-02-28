<!--
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-02-27 20:17:28
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-02-27 20:17:35
 * @FilePath: \test\src\components\Todos.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <ListTodo 
    v-for="item in Todos" 
    :Todo = item
    :key="item.id"
    :switchCheck="switchCheck"
    />
  </div>
</template>

<script>
import ListTodo from './ListTodo.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        ListTodo,
    },
    props:["Todos","switchCheck"]
}
</script>

<style>

</style>