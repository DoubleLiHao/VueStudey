<template>
  <div>
    <div class="box">
      <div>
        <input type="checkbox" @click="TodosCheckAll($event.target)">
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
  props:["TodosDone","TodosTotal","DeleteCheck","TodosCheckAll"]
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