import Vue from 'vue'
import App from './App.vue'
// 状态管理
// import store from './store'

import './assets/js/set.js'
import './assets/css/reset.css'

// 路由
import VueRouter from 'vue-router'
import router from './router'

import axios from 'axios'//引入axios
Vue.prototype.$axios = axios;//把axios挂载到vue上

import {scrollbar} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//elm-ui 组件库
Vue.component(scrollbar);


Vue.config.productionTip = false

// 使用 vuex 管理状态的时候需要挂载到vm上让所有

Vue.use(VueRouter)


new Vue({
  el:'#app',
  render: h => h(App),
  
  // 状态管理
  // store,
  // beforeCreate(){
  //   Vue.prototype.$bus = this
  // }


  // 路由
  router,
})

