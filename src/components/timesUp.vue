<template>
    <div id="main" v-show="showTimesUp">
        <section>
            <img :src="iconUrl" />
            <p>{{ title }}</p>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            title: 'Times Up!',
            iconUrl: require('@/assets/images/btn_menu.png')
        }
    },
    computed: {
        ...mapGetters(['showTimesUp'])
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/stylesheets/styles.scss';
    #main {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: $main-bg-color;
        background-image: $main-bg-img;
        z-index: $top-zIndex;
        color: #fff;
        font-weight: bolder;
        font-size: 12pt;

        section {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>