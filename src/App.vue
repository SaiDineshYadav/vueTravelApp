<template>
  <div id="app">
    <TheNavigation></TheNavigation>
    <transition name="slide" mode="out-in">
      <router-view :key="$route.path"></router-view> 
    </transition>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation';

export default {
  components:{
    TheNavigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transition: translateX(-30%);
}
</style>
