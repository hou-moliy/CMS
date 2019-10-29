<template>
  <div class="CommentContainer">
    <p class="comment-title">发表评论</p>
<!--    <textarea class="comment-content"></textarea>-->
    <el-input  placeholder="请输入内容" class="comment-text"></el-input>
    <el-button type="primary" class="comment-btn">发表</el-button>
    <div class="comment-oldcomments">
      <ul class="comments-list">
        <li class="list-item" v-for="(newcomment,index) in newscomments" :key="index">
          <div class="list-title">
            <span>第{{index}}楼</span>
            <span>用户：{{newcomment.user_name}}</span>
            <span>发表时间：{{newcomment.add_time|dataFormat}}</span>
          </div>
          <p class="list-text">{{newcomment.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
export default {
  data(){
    return{
      pageIndex: 1,//默认只访问第一页的数据
    }
  },
  props:{
    id: Number,//接收父组件传递过来的id值
  },
  computed:{

  },
  mounted () {
    let  id =parseInt(this.id)
    //解决在当前页面刷新，报错
    if (!this.id){
      return
    }else {
      this.$store.dispatch('getNewsComments',{id:id,pageIndex: this.pageIndex})
    }
    if (!this.newscomments.length){
      console.log("length=0")
      return
    }else {
      new BScroll(".comment-oldcomments")
    }
  },
  computed:{
    ...mapState(['newscomments'])
  },
  watch:{

  }
}
</script>
<style lang="scss" scoped>
  @import "../../common/style/index";
  .CommentContainer{
    @extend %WH;
    .comment-title{
      color: #0062cc;
    }
    .comment-text{

    }
    .comment-btn{

    }
    .comment-oldcomments{
      @extend  %WH;
      height: 200px;
      border: 1px solid sandybrown;
      margin-top: 10px;
      overflow: hidden;
      .comments-list{
        @extend %WH;
        height: auto;
        .list-item{
          .list-title{
            font-size: 13px;
            font-weight: normal;
            span{
              margin-right: 5px;
            }
          }
          .list-text{
            background-color: #ffffff;
          }
        }
      }
    }
  }
</style>
