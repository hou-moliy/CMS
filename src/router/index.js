import Vue from 'vue'
import Router from 'vue-router'
import Homecontainer from '../pages/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      components:Homecontainer
    }

  ],
  linkActiveClass: 'active'
})
