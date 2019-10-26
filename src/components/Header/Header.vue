<template>
  <header>
    <el-page-header @back="goBack" class="head">
    </el-page-header>
  </header>
</template>
<script>
export default {
    methods: {
      goBack () {
        console.log('go back')
      }
    }
  }
</script>
<style lang="scss">

   .head{
     background-color: #42b983;
   }
</style>
