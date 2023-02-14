

<!-- qq音乐 vue2 案例 -->
<template>
  <div id="app">
    <!-- 最好再给此处传递个参数，区分不同路由的页面，也可以放在组件中获取路由进行判断 -->
    <MusicFix/>
    <MusicContent/>
    <MusicCopyright/>
    <Musicfooter/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import router from './router';
import MusicFix from './components/MusicFix'
import MusicContent from './components/MusicContent'
import MusicCopyright from './components/MusicCopyright'
import Musicfooter from './components/Musicfooter'

export default {
  name: 'app',
  components: {
    MusicFix,router,MusicContent,MusicCopyright,Musicfooter
},
data(){
  return {
    
  }
},


}
</script>

<style>
body{
  background-color: #fafafa;
}
</style>
