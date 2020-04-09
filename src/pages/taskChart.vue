<template>
    <div id="main">
        <article class="mt-2">
            <p>{{ titleContent }}</p>
        </article>
        <b-row class="mt-2">
            <b-col class="block" cols="6">
                <small>{{ todayTitle }}</small>
                <p>
                    <span class="finish-font">{{ completedTodayList.length }}</span> / {{ todayTaskList.length }}
                </p>
            </b-col>
            <b-col class="block" cols="6">
                <small>{{ weeklyTitle }}</small>
                <p>
                    <span class="finish-font">{{ completedTaskList.length }}</span> / {{ taskList.length }}
                </p>
            </b-col>
        </b-row>
        <section class="mt-2">
            <h5>{{ chartTitle }}</h5>
            <div class="chart-tag">
                <span class="mr-2" :class="activeTagClass(TAG.TODAY)" @click="getChartToday">Today</span>
                <span :class="activeTagClass(TAG.WEEK)" @click="getChartWeek">Weekly</span>
            </div>
            <ve-histogram 
                :data="chartData"
                :tooltip-visible="false"
                :legend-visible="false"
                :textStyle="chartLabelColor"
            ></ve-histogram>
        </section>
    </div>
</template>
<script>
import { CHART_TAG } from '@/services/const.js';
import { mapGetters } from 'vuex';
import { parseDate, getWeekDate } from '@/services/extraFun.js';

export default {
    data() {
        return {
            TAG: CHART_TAG,
            titleContent: 'You completed your goal 4 days a row !',
            todayTitle: "Today's Task",
            weeklyTitle: 'Weekly Task',
            chartTag: CHART_TAG.WEEK,
            chartTitle: 'Completed Task',         
            chartData: {},
            chartLabelColor: {
                color: '#b7b7b7'
            }
        }
    },
    computed: {
        ...mapGetters(['taskList']),
        todayTaskList() {
            let date = parseDate(new Date());
            
            return this.taskList.filter(task => date === task.date);
        },
        completedTaskList() {
            return this.taskList.filter(task => task.finish === true);
        },
        completedTodayList() {
            return this.todayTaskList.filter(task => task.finish === true);
        }
    },
    methods: {
        getChartWeek() {
            this.chartTag = this.TAG.WEEK;
            let weekList = getWeekDate(new Date());
            let dataGroup = weekList.map(date => {
                let newDate = this.makeChartData(date);

                return {
                    'dateInt': date,
                    'date': newDate,
                    'task': 0
                };
            });

            //計算同日期下完成的任務數量
            this.completedTaskList.forEach(task => {
                dataGroup.forEach(data => {
                    if(data.dateInt === task.date) {
                        data['task'] += 1;
                    }
                });
            });

            this.chartData = {
                columns: ['date', 'task'],
                rows: dataGroup
            };
        },
        getChartToday() {
            this.chartTag = this.TAG.TODAY;
            let date = (this.completedTodayList > 0) ? this.completedTodayList[0].date : new Date();
            let newDate = this.makeChartData(date);

            this.chartData = {
                columns: ['date', 'task'],
                rows: [{
                    'date': newDate,
                    'task': this.completedTodayList.length
                }]
            };
        },
        /**
         * 轉換時間戳為字串時間
         * @param {number} date 數字時間戳
         * @returns {string} Month / Date 格式時間
         */
        makeChartData(date) {
            let newDate = new Date(date);

            return (newDate.getMonth() + 1) + ' / ' + newDate.getDate();
        },

        /**
         * 作用中的圖表 tag class
         * @param {CHART_TAG | number} tag_id 圖表tag Enum
         * @returns {object} class
         */
        activeTagClass(tag_id) {
            return {
                'active': (this.chartTag === tag_id)
            };
        }        
    },
    created() {
        this.titleContent = `You completed your goal ${this.completedTaskList.length} tasks !`,
        this.getChartWeek();
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/stylesheets/page/taskChart.scss';
</style>