<template>
  <div id="nav">
    <p>子应用</p>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <button @click="toHome">to home</button>
    <button @click="toAbout">to about</button>
  </div>
  <router-view />
</template>
<script setup>
import {
  useRouter
} from 'vue-router' //引入router
const router = useRouter()
function toHome() {
  router.push({
    path: '/'
  })
}
function toAbout() {
  router.push({
    path: '/about'
  })
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
