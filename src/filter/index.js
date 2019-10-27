import Vue from 'vue'
 //导入时间插件
 import moment from 'moment'
 //定义全局的过滤器
 Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    //如果直接调用，是当前的时间
   // moment();
   //得到给定时间的字符串
   return moment(dataStr).format(pattern);
})
