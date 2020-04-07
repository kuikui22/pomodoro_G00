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
                <span class="mr-2">Today</span>
                <span class="active">Weekly</span>
            </div>
            <ve-histogram 
                :data="chartData"
                :tooltip-visible="false"
                :legend-visible="false"
            ></ve-histogram>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            titleContent: 'You completed your goal 4 days a row !',
            todayTitle: "Today's Task",
            weeklyTitle: 'Weekly Task',
            todayTask: 25,
            todayFinish: 25,
            weeklyTask: 30,
            weeklyFinish: 30,
            chartTitle: 'Completed Task',
            chartData: {}
        }
    },
    methods: {
        getChartData() {
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
        }
    },
    created() {
        this.getChartData();
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/stylesheets/page/taskChart.scss';
</style>