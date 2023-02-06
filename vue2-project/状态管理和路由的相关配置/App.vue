<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link :to="{
      name:'Home',
      params:{
       
    }
    }" active-class="active"> 1</router-link>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import router from './router';

export default {
  name: 'app',
  components: {
    RouterView,router
},
data(){
  return {
    sum:0
  }
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
