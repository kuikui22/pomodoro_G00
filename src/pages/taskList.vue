<template>
    <div id="main" class="w-100">
        <section>
            <h3>{{ title }}</h3>
            <span>{{ month }}</span>
        </section>
        <div class="main-nav">
            <b-nav fill align="center">                
                <b-nav-item v-for="(item, key) in monthList" :key="key" :class="dateActiveClass(item.date)">
                    <span class="title-week">{{ item.week }}</span>
                    <span class="title-date">{{ item.date }}</span>
                </b-nav-item>
            </b-nav>
        </div>
        <transition-group tag="div" class="content position-relative" name="task-list">
            <div class="card task-list-item" v-for="(item, key) in taskList" :key="key" :class="moveClass(key)">
                <div class="card-body" :class="{'finish':item.finish}" @click.stop="showDelete(key)">
                    <span class="finish-check" @click.stop="finishTask(key)">
                        <b-icon-check v-show="item.finish"></b-icon-check>
                    </span>
                    <span class="task-name">{{ item.name }}</span>
                    <span class="arrow-btn" v-show="!item.finish">
                        <b-icon-play-fill></b-icon-play-fill>
                    </span>
                    <span class="task__btn-del" @click="delTask(key)">
                        <b-icon-trash></b-icon-trash>
                    </span>
                </div>
            </div>
        </transition-group>
        <router-link tag="button" to="createTask" class="btn btn-success add-btn">
            <b-icon-plus></b-icon-plus>
        </router-link>
    </div>
</template>
<script>
import { getMonth_En, getDay_En } from '@/services/extraFun.js';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            title: 'Task',
            month: '',
            monthList: [],
            movingTask: null
        }
    },
    computed: {
        ...mapGetters(['taskList'])
    },
    methods: {
        getMonth() {
            this.month = getMonth_En(new Date().getMonth())
        },

        /**
         * 這星期的日期
         */
        getWeeks() {            
            this.monthList = [];
            let date = new Date();
            let newDate = new Date();
            let resetDay = date.getDay();
            date.setDate(date.getDate() - resetDay);

            for(let i = 0; i < 7; i++) {   
                newDate.setDate(date.getDate() + i);

                this.monthList.push({
                    week: getDay_En(newDate.getDay()),
                    date: newDate.getDate()
                });
            }
        },

        /**
         * 標記今天的日期
         * @param {number} date 比對的日期
         * @returns {object} class
         */
        dateActiveClass(date) {
            let today = new Date().getDate();
            let active =  (date === today) ? true : false;
            
            return {
                'active': active
            };
        },

        /**
         * 任務塊移動
         * @param {number} id 任務順序(key)
         * @returns {object} class
         */
        moveClass(id) {
            let useClass = (this.movingTask === id) ? true : false;

            return {
                'task-moving': useClass
            };
        },

        /**
         * 顯示刪除按鈕
         * @param {number} id 任務順序(key)
         * @todo 刪除動畫需修改
         */
        showDelete(id) {            
            this.movingTask = (this.movingTask === id) ? null : id;
        },

        /**
         * 刪除任務
         * @param {number} id 任務順序(key)
         */
        delTask(id) {
            if(isNaN(id))
                return; 

            this.$store.commit('DEL_TASK', id);
        },

        /**
         * 改變任務完成狀態
         * @param {number} id 任務順序(key)
         */
        finishTask(id) {
            if(isNaN(id))
                return;

            this.$store.commit('CHANGE_STATUS_TASK', id);
        }
    },
    created() {
        this.getMonth();
        this.getWeeks();
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/stylesheets/page/taskList.scss';
</style>