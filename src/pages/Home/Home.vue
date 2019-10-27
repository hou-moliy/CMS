<template>

  <div class="HomeContainer">
    <!-- 头部-->
    <Header title="CMS">
      <span class="" slot="left">
      <i class="el-icon-setting"></i>
      </span>
      <span class="" slot="right">
      <i class="el-icon-user"></i>
      </span>
    </Header>
    <!--  轮播图-->
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(lunbo ,index) in LunBoTu" :key="index">
          <img class="small" v-lazy="lunbo.img"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--    九宫格区域-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#" @click="$router.push({path:'/home/newlist'})">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#" @click="$router.push({path:'/home/newlist'})">
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#" @click="$router.push({path:'/home/newlist'})">
		                    <span class="mui-icon el-icon-shopping-cart-2"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#" @click="$router.push({path:'/home/newlist'})">
		                    <span class="mui-icon mui-icon-contact"></span>
		                    <div class="mui-media-body">登陆查询</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#" @click="$router.push({path:'/home/newlist'})">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#" @click="$router.push({path:'/home/newlist'})">
		                    <span class="mui-icon mui-icon-list"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
  </div>
</template>
<script>
  import Header from '../../components/Header/Header.vue'
  import {mapState} from 'vuex'

  export default {
    components: {
      Header
    },
    mounted () {
      this.$store.dispatch('getLunBoTu')
    },
    computed: {
      ...mapState(['LunBoTu'])
    }
  }
</script>
<style lang="scss" >
    Header {
      color: #ffffff;

      span {
        i {
          font-size: 25px;
          color: #fff;
        }
      }
    }
  .HomeContainer {
    .el-carousel {
      width: 100%;
      height: 180px;
    }
    .el-carousel__item img {
      width: 100%;
      height: 100%;
      color: #475669;
      margin: 0;
    }
  }


</style>
