<template>
  <div>我是app.vue文asfafdasdfsf件</div>
  <img alt="Vue logo" class="logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
  },
})
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}
.logo
  width 100px
  height 100px
  overflow hidden
  object-fit cover
</style>