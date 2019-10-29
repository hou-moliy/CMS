<template>
  <div class="NewsInfoContainer">
    <Header title="新闻详情">
      <span class="" slot="left" @click="$router.go(-1)">
      <i class="el-icon-arrow-left"></i>
      </span>
      <span class="" slot="right" @click="collect">
        <i class="el-icon-star-off" style="margin-right: 5px;" v-if="!collected&&(this.$route.params.id===id)"></i>
        <i class="el-icon-star-on" style="margin-right: 5px;" v-else></i>
      </span>
    </Header>
    <div class="newsinfo-wrapper" ref="infoWarpper" v-show="newsinfo">
      <div class="news-info" v-if="newsinfo[0]">
        <div class="newinfo-header">
          <p class="newsinfo-title">{{newsinfo[0].title}}</p>
          <p class="newinfo-date">
            <span class="add-time">发表时间：{{newsinfo[0].add_time |dataFormat}}</span>
            <span>点击：{{newsinfo[0].click}}次</span>
          </p>
        </div>
        <div class="newsinfo-content" v-html="newsinfo[0].content"></div>
        <Comment :id="newsinfo[0].id"></Comment>
      </div>
    </div>

  </div>
</template>
<script>
  import Header from '../../components/Header/Header.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Comment from '../../components/Comment/Comment.vue'

  export default {
    data () {
      return {
        id: this.$route.params.id,//获取路由传递过来的id值
        collected:false,//控制新闻详情是否被收藏
        newsInfo: {},
      }
    },
    components: {
      Header,
      Comment
    },
    mounted () {
      console.log(typeof(this.id))
      this.$store.dispatch('getNewsInfo', this.id)
      if (!this.newsinfo[0]) {
        console.log('ok')
        return
      } else {
        this._initScroll()
      }

    },
    methods: {
      _initScroll () {
        //列表显示后才可以创建
        new BScroll(this.$refs.infoWarpper)
        // console.log(new BScroll(this.$refs.infoWarpper))
      },
      collect(){//控制新闻详情的收藏
        this.collected = !this.collected
        return this.collected
      }
    },
    computed: {
      ...mapState(['newsinfo'])
    },
    watch: {
      newsinfo () {//刷新流程---》更新数据
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../common/style/index";

  .NewsInfoContainer {
    @extend %WH;
    height: auto;

    .newsinfo-wrapper {
      @extend %WH;
      height: 600px;
      overflow: hidden;

      .news-info {
        height: auto;

        .newinfo-header {
          height: 80px;
          border-bottom: 1px solid #000000;
          padding-top: 10px;
          @include Display();
          flex-direction: column;

          .newsinfo-title {
            font-weight: bold;
            color: #333333;
          }

          .newinfo-date {
            @extend %WH;
            color: black;
            @include Display();
            margin-top: 20px;
            font-size: 12px;

            .add-time {

            }
          }
        }

        .newsinfo-content {
          @extend %WH;
          height: auto;
          padding-top: 10px;
        }
      }
    }

  }
</style>
