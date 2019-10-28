import ajax from './ajax'
const BASE_URL = 'http://www.liulongbin.top:3005/api'
  export const reqLunBo = ()=> ajax(BASE_URL+'/getlunbo')//请求获取轮播图
  export const reqNewList = ()=> ajax(BASE_URL+'/getnewslist')//请求获取新闻列表
  export const reqNewInfo = (id)=> ajax(BASE_URL+'/getnew',{id})//请求获取新闻详情
