<template>
    <transition tag="div" name="time__up">
        <div id="main" v-show="showTimesUp" @click.self="close">
            <section>
                <img :src="iconUrl" />
                <p>{{ title }}</p>
                <audio id="audio" :src="voice" ref="audio" muted />
            </section>
        </div>
    </transition>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            title: 'Times Up!',
            iconUrl: require('@/assets/images/btn_menu.png'),
            voice: require('@/assets/voice/se_maoudamashii_onepoint30.mp3')
        }
    },
    computed: {
        ...mapGetters(['showTimesUp'])
    },
    watch: {
        showTimesUp: function(value) {
            console.log(this);
            if(value === true) {
                this.playAudio();
            }
        }
    },
    methods: {
        close() {
            this.$store.commit('SHOW_TIMES_UP', false);
        },
        playAudio() {
            this.$refs.audio.play();
        }
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
    .time__up-enter,
    .time__up-leave-to {
        opacity: 0;
    }
    .time__up-enter-active,
    .time__up-leave-active {
        transition: all .5s ease;
    }
</style>