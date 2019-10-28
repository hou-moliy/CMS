<template>
  <div class="NewListContainer">
    <!-- 头部-->
    <Header title="新闻资讯">
      <span class="" slot="left" @click="$router.go(-1)">
      <i class="el-icon-arrow-left"></i>
      </span>
      <span class="" slot="right">
      </span>
    </Header>
    <router-view></router-view>
    <!-- 新闻资讯列表-->
    <div class="new-list" ref="Warpper">
      <ul class="new-ul">
        <li class="new-item"  @click="toNewsInfo(newObj.id)"
            v-for="(newObj,index) in NewList" :key="index">
          <img alt="" :src="newObj.img_url" class="new-img">
          <p class="new-right">
            <span class="new-title">
             {{newObj.title}}
            </span>
            <span class="new-time">
              {{newObj.add_time|dataFormat}}
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Header from '../../components/Header/Header'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    components: {
      Header
    },
    mounted () {
      this.$store.dispatch('getNewList', () => {
        this.$nextTick(() => {
          //列表显示后才可以创建
          new BScroll(this.$refs.Warpper, {
            probeType: 2,
          })
        })
      })
    },
    computed: {
      ...mapState(['NewList'])
    },
    methods:{
      toNewsInfo(id){
        this.$router.push({name:'newsinfo',params:{id:id}})
      }
    }
  }
</script>
<style lang="scss">
  @import "../../common/style/index";

  img {
    @extend %WH;
  }

  .NewListContainer {
    @extend %WH;

    .new-list {
      @extend %WH;
      height: 600px;
      overflow: hidden;

      .new-ul {
        .new-item {
          @extend %WH;
          height: 80px;
          @include Display(flex-start, center);
          border: 1px solid #c0c0c0;

          .new-img {
            width: 50px;
            height: 50px;
          }

          p.new-right {
            height: 50px;
            display: flex;
            flex-direction: column;
            padding-top: 10px;

            .new-title {
              font-size: 15px;
              white-space: nowrap;
              text-overflow: clip;
              overflow: hidden;
            }

            .new-time {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

</style>
