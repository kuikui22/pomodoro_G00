<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
@import '~@/assets/stylesheets/custom.scss';

html, body {
  width: 100%;
  height: 100vh;
  background-color: $body-bg-color;
  font-family: $font-family;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
