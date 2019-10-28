import Vue from 'vue'
import Router from 'vue-router'

const Homecontainer = () => import( '../pages/Home/Home.vue')
const MemmberContainer = () => import('../pages/Memmber/Memmber.vue')
const ShopCarContainer = () => import('../pages/ShopCar/ShopCar.vue')
const SearchContainer = () => import('../pages/Search/Search.vue')
const NewListContainer = () => import('../pages/NewList/NewList.vue')
const NewsInfoContainer = () => import('../pages/NewsInfo/NewsInfo.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Homecontainer,
    },
    {
      path: '/memmber',
      component: MemmberContainer
    },
    {
      path: '/shopcar',
      component: ShopCarContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/home/newlist',
      component: NewListContainer
    },
     {
      path: '/home/newsinfo/:id',
       name:'newsinfo',
      component: NewsInfoContainer
    }

  ],
  linkActiveClass: 'active'
})
