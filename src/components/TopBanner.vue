<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
    name: 'TopBanner',
    data() {
        return {
            title: '我是顶部栏'
        }
    }
}
</script>

<style scoped>
div{
  color: white;
}
</style>