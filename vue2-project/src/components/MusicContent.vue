


<!-- qq音乐 vue2 案例 -->
<template>
    <div class="music_content">
      <keep-alive>
        <RouterView></RouterView>
      </keep-alive>
    </div>
</template>
  
<script>
import { RouterLink, RouterView } from 'vue-router';
import router from '../router';
import Index from '../pages/Index'

  export default {
    name: "MusicContent",
    data() {
        return {};
    },
    components: { RouterLink, router, RouterView, Index}
}
  </script>
  
<style>
</style>