

<!-- qq音乐 vue2 案例 -->
<template>
  <div id="app">
    <MusicFix/>
    <MusicContent/>
    <Musiccopyright/>
    <Musicfooter/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import router from './router';
import MusicFix from './components/MusicFix'
import MusicContent from './components/MusicContent'
import Musiccopyright from './components/Musiccopyright'
import Musicfooter from './components/Musicfooter'

export default {
  name: 'app',
  components: {
    MusicFix,router,MusicContent,Musiccopyright,Musicfooter
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
