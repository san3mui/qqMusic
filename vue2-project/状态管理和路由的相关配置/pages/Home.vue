<template>
    <div>
        Home
    </div>
</template>
  
  <script>
  
  export default {
    name: 'Home',
    mounted() {
      console.log('home 被挂载')
    },
    destroyed(){
      console.log('home 被销毁')
    },
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter ( to , from ,next){
      //...
      next()
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave (to,from,next){
      next()
    }
   
  }
  </script>
  
  