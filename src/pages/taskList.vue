<template>
    <div id="main" class="w-100">
        <section>
            <h3>{{ title }}</h3>
            <span>{{ month }}</span>
        </section>
        <div class="main-nav">
            <b-nav fill  align="center">                
                <b-nav-item v-for="(item, key) in monthList" :key="key">
                    <span class="title-week">{{ item.week }}</span>
                    <span class="title-date">{{ item.date }}</span>
                </b-nav-item>
            </b-nav>
        </div>
        <div class="content">
            <div class="card" v-for="(item, key) in taskList" :key="key">
                <div class="card-body">
                    <b-icon-check-circle></b-icon-check-circle>
                    <span>{{ item.name }}</span>
                    <span class="arrow-btn">
                        <b-icon-play-fill></b-icon-play-fill>
                    </span>
                </div>
            </div>
        </div>
        <router-link tag="button" to="createTask" class="btn btn-success add-btn">
            <b-icon-plus></b-icon-plus>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Task',
            month: 'May',
            monthList: [],
            taskList: []
        }
    },
    methods: {
        getMonth() {
            this.monthList = [
                { week: 'S', date:'18' },
                { week: 'M', date:'19' },
                { week: 'T', date:'20' },
                { week: 'W', date:'21' },
                { week: 'T', date:'22' },
                { week: 'F', date:'23' },
                { week: 'S', date:'24' },
            ];
        },
        getTask() {
            this.taskList = [
                { finish: true, name: 'Work on Project A' },
                { finish: false, name: 'Work on Project B' },
                { finish: false, name: 'Work on Project C' },
                { finish: false, name: 'Work on Project D' },
                { finish: false, name: 'Work on Project E' },
            ];
        }
    },
    created() {
        this.getMonth();
        this.getTask();
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/stylesheets/page/taskList.scss';
</style>