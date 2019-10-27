<template>
  <header class="head">
   <slot name="left"></slot>
    <span class="head_title">
      <span class="">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>
<script>
export default {
    methods: {
    },
  props:{
      title:String
  }
  }
</script>
<style lang="scss">

   .head{
     width: 100%;
     height: 35px;
     background-color: #42b983;
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
</style>
