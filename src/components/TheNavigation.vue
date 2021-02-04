<template>
  <nav id="nav">
      <ul class="nav-links">
          <li class="links">
      <router-link to="/"> Home </router-link>
          </li>
          <li v-for="destination of destinations" :key="destination.id" class="links">
            <router-link :to="{name: 'DestinationDetails', params: {id: destination.id}}"> 
                {{ destination.name }}
            </router-link>
          </li>
      </ul>
  </nav>
</template>

<style scoped>

#nav {
  padding: 30px;
   display: flex;
    align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import store from '@/store.js';

export default {
     data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>