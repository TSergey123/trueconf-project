<template>
  <traffic-light></traffic-light>
</template>

<script>
import TrafficLight from './components/TrafficLight.vue'

export default {
  name: 'App',
  components: {
    TrafficLight,
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
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100v;
}
</style>
