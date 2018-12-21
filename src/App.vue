<template>
  <div id="app">
    <img src="./assets/logo.png">
    <WebmdComponent msg="Welcome to WebMD"/>
  </div>
</template>

<script>
import WebmdComponent from './components/WebmdComponent.vue'

export default {
  name: 'app',
  components: {
    WebmdComponent
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
