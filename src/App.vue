<template>
  <div class="HomeContainer">

    <!--    中间路由区域-->
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>

</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
  }


</style>
