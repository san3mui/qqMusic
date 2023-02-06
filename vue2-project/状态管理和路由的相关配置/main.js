import Vue from 'vue'
import App from './App.vue'
// 状态管理
// import store from './store'


// 路由
import VueRouter from 'vue-router'
import router from './router'


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

