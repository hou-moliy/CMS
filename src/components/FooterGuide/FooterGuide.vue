<template>
  <div class="FooterContainer">
    <nav class="tab-bar">
      <router-link class="tab-item" to="/home">
        <i class="el-icon-s-home"></i>
        <span class="tab-label">首页</span>
      </router-link>
      <router-link class="tab-item" to="/memmber">
        <i class="el-icon-user-solid"></i>
        <span class="tab-label">会员</span>
      </router-link>
      <router-link class="tab-item" to="/shopcar">
        <i class="el-icon-shopping-cart-2">
          <span class="mui-badge">5</span>
        </i>
        <span class="tab-label">购物车
        </span>
      </router-link>
      <router-link class="tab-item" to="/search">
        <i class="el-icon-search"></i>
        <span class="tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  @import "../../common/style/index.scss";

  .active {
    background-color: #42b983;
  }

  .FooterContainer {
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0px;

    .tab-bar {
      width: 100%;
      height: 50px;
      position: absolute;
      bottom: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid slategray;
      background-color: #EFEFF4;

      .tab-item {
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;

        i {
          font-size: 25px;
        }
      }
    }
  }
</style>
