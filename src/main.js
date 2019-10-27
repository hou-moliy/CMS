// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from './store'
import loading from './common/images/loading.gif'
import Vuelazyload from 'vue-lazyload'
import mui from './lib/mui/css/mui.css'
import './filter/index.js'
Vue.use(mui)
Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuelazyload,{
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h=>h(App),
  store
})
