<template>
  <div id="app">
    <transition tag="div" name="body__bg-time">
      <div class="body__bg-time" v-show="hasTimer"></div>
    </transition>
    <router-view></router-view>
    <router-view name="footer"></router-view>
    <times-up></times-up>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import timesUp from '@/components/timesUp.vue';

export default {
  name: 'App',
  components: {
    timesUp
  },
  computed: {
      ...mapGetters(['hasTimer']),
      timeBgClass() {

        return {
          'body__bg-time-active': this.hasTimer
        };
      }
  }
}
</script>

<style lang="scss">
@import '~@/assets/stylesheets/custom.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  max-width: 640px;
  height: 100vh;
  z-index: 1;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0);  
}
.body__bg-time {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    background-image: radial-gradient(#2f3e60, #000);
}
.body__bg-time-enter,
.body__bg-time-leave-to {
    opacity: 0;
}
.body__bg-time-enter-active,
.body__bg-time-leave-active {
    transition: all .4s ease;
}

</style>
