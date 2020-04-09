<template>
    <div id="main">
        <section class="px-3 pt-3 pb-2">
            <h3>{{ title }}</h3>
        </section>
        <div class="timer__box">
            <p>{{ cutdown | minuteTime }}</p>
        </div>
        <div class="block__reps my-3">
            <b-form-spinbutton id="sb-inline" min="1" max="25" v-model="value" inline></b-form-spinbutton>
        </div>
        <b-row class="block__btns">
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
            img: require('@/assets/images/trans-am1.png'),
            TaskStatus: 'Start',
            value: 5            
        };
    },
    computed: {
        ...mapGetters(['cutdown', 'hasTimer', 'runningTask', 'taskList']),
        title() {
            if(this.runningTask === null) {
                return 'Set Time';
            }

            return this.changeTitle(this.runningTask);
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