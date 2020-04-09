<template>
    <div id="main" class="w-100">
        <section>
            <h3>{{ title }}</h3>
            <span>{{ month }}</span>
        </section>
        <div class="main-nav">
            <b-nav fill align="center">                
                <b-nav-item v-for="(item, key) in weekList" :key="key" :class="dateActiveClass(item.date)">
                    <span class="title-week">{{ item.week }}</span>
                    <span class="title-date">{{ item.date }}</span>
                </b-nav-item>
            </b-nav>
        </div>
        <transition-group tag="div" class="content" name="task-list">
            <div class="card task-list-item" v-for="(item, key) in newList" :key="item.id" :class="moveClass(key)">
                <div class="card-body" :class="{'finish':item.finish}" @click.stop="showDelete(key)">
                    <span class="finish-check" @click.stop="finishTask(key)">
                        <b-icon-check v-show="item.finish"></b-icon-check>
                    </span>
                    <span class="task-name">{{ item.name }}</span>
                    <span class="arrow-btn" v-show="!item.finish" @click="doTask(item.id)">
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
import { getMonth_En, getDay_En, getWeekDate } from '@/services/extraFun.js';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            title: 'Task',
            month: '',
            weekList: [],
            movingTask: null,
            showTask: null        
        }
    },
    computed: {
        ...mapGetters(['taskList']),
        newList() {
            if(this.showTask === null) {
                return this.taskList;
            }

            return this.taskList.filter(task => {

                if( task.date === this.weekList[this.showTask].dateParse) {
                    return task;
                }
            });
        }
    },
    methods: {
        getMonth() {
            this.month = getMonth_En(new Date().getMonth())
        },

        /**
         * 這星期的日期
         */
        getWeeks() {

            this.weekList = getWeekDate(new Date()).map(date_int => {
                let date = new Date(date_int);

                return {
                    week: getDay_En(date.getDay()),
                    date: date.getDate(),
                    dateParse: date_int
                };
            });
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
         * @todo 這裡先不實裝此功能, 全部顯示與搜尋顯示需規劃UX
         * 依照點選的日期顯示任務
         * @param {number} date_id 點選的tag標籤
         */
        searchTask(date_id) {            
            this.showTask = (date_id === this.showTask) ? null : date_id;
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
        },
        doTask(id) {
            this.$store.commit('DO_TASK', id);
            this.$router.push('/setTime');
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