<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="footer"></router-view>
    <times-up></times-up>
  </div>
</template>

<script>
import timesUp from '@/components/timesUp.vue';

export default {
  name: 'App',
  components: {
    timesUp
  }
}
</script>

<style lang="scss">
@import '~@/assets/stylesheets/custom.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
