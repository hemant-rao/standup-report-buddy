<template>
  <div id="nav">
      <NevBar />
  </div>
  <router-view />
</template>

<script>
import NevBar from "./views/Header/NevBar.vue";
export default {
    components:{
      NevBar
  },
  setup() {
    
  },
}
</script>

<style lang="scss">
@import "../node_modules/typeface-roboto/index.css";
#app {
  font-family: roboto, Avenir, Helvetica, "Noto Sans Myanmar UI", arial,
    sans-serif sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
