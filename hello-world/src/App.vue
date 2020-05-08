<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld></HelloWorld>
    <Ninja></Ninja>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ninja from './components/Ninja.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Ninja
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
  margin-top: 60px;
}
</style>
