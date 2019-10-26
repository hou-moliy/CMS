<template>
  <div class="HomeContainer">
    <Header></Header>
    <nav class="tab-bar">
      <router-link class="tab-item" to="/index">
        <span class="el-icon-s-home"></span>
        <span class="tab-label">首页</span>
      </router-link>
      <router-link class="tab-item" to="/memmber">
        <span class="el-icon-user-solid"></span>
        <span class="tab-label">会员</span>
      </router-link>
      <router-link class="tab-item" to="/shopcar">
        <span class="el-icon-shopping-cart-2"></span>
        <span class="tab-label">购物车</span>
      </router-link>
      <router-link class="tab-item" to="/search">
        <span class="el-icon-search"></span>
        <span class="tab-label">搜索</span>
      </router-link>
    </nav>
  </div>

</template>
<script>
  import Header from './components/Header/Header'

  export default {
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
  }
 .active{
   border-radius: 13px;
   background-color: #42b983;
 }
  .HomeContainer {
    height: 100%;
    width: 100%;
    .tab-bar {
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid slategray;
      background-color:#EFEFF4 ;
      .tab-item{
        text-decoration: none;
        color:black;
      }
    }
  }
</style>
