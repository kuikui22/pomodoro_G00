<template>
    <div id="main">
        <section class="px-3 pt-3 pb-2">
            <h3>{{ title }}</h3>
        </section>
        <div class="timer__box">
            <div class="w-100 position-absolute overflow-hidden top-0">
                <img :src="img" class="img-fluid" />
                <transition tag="div" name="trans-am">
                    <div class="w-100 h-100 trans-am" v-show="hasTimer">
                        <div class="action__box">
                            <span class="logo"></span>
                        </div>
                        <div class="move__box__group move-l__anim">
                            <span class="move__box box__l move-l__anim"></span>
                        </div>
                        <div class="move__box__group move-r__anim">
                            <span class="move__box box__r move-r__anim"></span>
                        </div>
                        <span class="rotate__box rotate__box-r rotate__anim"></span>
                        <span class="rotate__box rotate__box-l rotate-reverse__anim"></span>
                        <div class="circle__side circle__top">
                            <div class="circle__content circle__content-top" :style="progress"></div>
                        </div>
                        <div class="circle__side circle__bottom">
                            <div class="circle__content circle__content-bottom" :style="progress"></div>
                        </div>
                        <div class="font-box">
                            <span v-for="(item, index) in aniFont" :key="index">
                                {{item}}
                            </span>
                        </div>
                    </div>
                </transition>
            </div>
            <p>{{ cutdown | minuteTime }}</p>
        </div>
        <div class="block__reps my-2">
            <b-form-spinbutton id="sb-inline" min="1" max="25" v-model="value" inline></b-form-spinbutton>
        </div>
        <b-row class="block__btns mx-0">
            <b-col>
                <button class="btn" @click="resetTime">
                    <b-icon-arrow-clockwise></b-icon-arrow-clockwise>
                </button>
            </b-col>
            <b-col>
                <button class="btn status-btn" v-show="!hasTimer" @click="startTime">{{ TaskStatus }}</button>
                <button class="btn status-btn" v-show="hasTimer" @click="stopTime">Pause</button>
            </b-col>
            <b-col>
                <button class="btn" @click="clearTime">
                    <b-icon-x></b-icon-x>
                </button>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { DEFAULT_TIME } from '@/services/const.js';

export default {
    data() {
        return {
            img: require('@/assets/images/tran-am2.png'),
            TaskStatus: 'Start',
            value: 5,
            aniFont: 'TRANS-AM'           
        };
    },
    computed: {
        ...mapGetters(['cutdown', 'hasTimer', 'runningTask', 'taskList', 'beStartTime']),
        title() {
            if(this.runningTask === null) {
                return 'Set Time';
            }

            return this.changeTitle(this.runningTask);
        },
        progress() {
            let parsent = Math.floor((this.beStartTime / this.cutdown) * 100) / 100;
            let deg = Math.floor(152 / parsent);

            return {
                'transform': 'rotate('+(-1 * (152 - deg))+'deg)'
            };
        }
    },
    filters: {
        minuteTime(seconds) {
            let min = Math.floor(seconds / 60);
            let sec = Math.floor(seconds % 60);

            min = (min.toString().length < 2) ? '0'+min : min;
            sec = (sec.toString().length < 2) ? '0'+sec : sec;

            return min + ':' + sec;
        }
    },
    methods: {
        ...mapActions(['TIME_START']),
        startTime() {
            this.TIME_START();
            let time = this.value * 60;

            this.$store.commit('TIME_START', time);
        },
        stopTime() {
            this.$store.commit('TIME_STOP');
        },
        resetTime() {
            this.$store.commit('TIME_RESET', DEFAULT_TIME);
        },
        clearTime() {
            this.$store.commit('TIME_CLEAR');
        },
        changeTitle(title_id) {
            let task = this.taskList.find(task => task.id === title_id);
            return task.name;
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/stylesheets/page/setTime.scss';
</style>