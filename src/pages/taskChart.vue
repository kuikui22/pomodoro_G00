<template>
    <div id="main">
        <article class="mt-2">
            <p>{{ titleContent }}</p>
        </article>
        <b-row class="mt-2">
            <b-col class="block" cols="6">
                <small>{{ todayTitle }}</small>
                <p>
                    <span class="finish-font">{{ todayFinish }}</span> / {{ todayTask }}
                </p>
            </b-col>
            <b-col class="block" cols="6">
                <small>{{ weeklyTitle }}</small>
                <p>
                    <span class="finish-font">{{ weeklyFinish }}</span> / {{ weeklyTask }}
                </p>
            </b-col>
        </b-row>
        <section class="mt-2">
            <h5>{{ chartTitle }}</h5>
            <div class="chart-tag">
                <span class="mr-2" @click="getChartToday">Today</span>
                <span class="active" @click="getChartWeek">Weekly</span>
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

export default {
    data() {
        return {
            TAG: CHART_TAG,
            titleContent: 'You completed your goal 4 days a row !',
            todayTitle: "Today's Task",
            weeklyTitle: 'Weekly Task',
            todayTask: 25,
            todayFinish: 25,
            weeklyTask: 30,
            weeklyFinish: 30,
            chartTag: CHART_TAG.WEEK,
            chartTitle: 'Completed Task',         
            chartData: {},
            chartLabelColor: {
                color: '#b7b7b7'
            }
        }
    },
    methods: {
        getChartWeek() {
            this.chartTag = this.TAG.WEEK;
            this.chartData = {
                columns: ['date', 'task'],
                rows: [
                    { 'date': '1/1', 'task': 10 },
                    { 'date': '1/2', 'task': 5 },
                    { 'date': '1/3', 'task': 1 },
                    { 'date': '1/4', 'task': 0 },
                    { 'date': '1/5', 'task': 3 },
                    { 'date': '1/6', 'task': 20 }
                ]
            };
        },
        getChartToday() {
            this.chartTag = this.TAG.TODAY;
            this.chartData = {
                columns: ['date', 'task'],
                rows: [
                    { 'date': '1/1', 'task': 10 }
                ]
            };
        },
        changeTagClass(tag_Id) {
            //TODO: 依據id 設定active啟用
            console.log(tag_Id);
        }
    },
    created() {
        this.getChartWeek();
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/stylesheets/page/taskChart.scss';
</style>