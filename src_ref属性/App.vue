<template>
  <div>
    <div ref="div">这是一个div节点</div>
    <Button @click='showDom'>点我展示div节点</Button>
    <School ref="sch"/>
  </div>
  
</template>

<script>
import School from './components/SchoolInfo.vue'
export default {
  name: 'App',
  components: { School },
  methods: {
    showDom() {
      console.log(this.$refs)
    }
  }
}
</script>

<style>

</style>