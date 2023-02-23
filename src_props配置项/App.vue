<template>
  <div>
    <StudentInfo name="张三"  :age="99" sex="男"/>
  </div>
  
</template>

<script>
import StudentInfo from './components/StudentInfo.vue'
export default {
  name: 'App',
  components: { StudentInfo },
}
</script>

<style>

</style>