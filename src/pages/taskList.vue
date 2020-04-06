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
@import '@/assets/stylesheets/styles.scss';
    #main {
        overflow: hidden;
        position: relative;

        .content {
            width: 100%;
            height: 58vh;
            overflow-x: hidden;
            overflow-y: auto;
            padding-bottom: 20pt;
            padding-top: 8pt;
        }
    }
    section {
        position: relative;

        span {
            position: absolute;
            right: 0;
            top: 5px;
            color: $titleColor;
        }
    }
    .main-nav {
        overflow-x: auto;
        overflow-y: hidden;
        padding-top: 10px ;
        padding-bottom: 15px ;

        ul {
            width: 100%;
        }
        li {

            a {
                padding: 0;
            }
            span {
                display: block;
            }
            .active {
                .title-date {
                    color: $titleColor;
                }
                .title-date::after {
                    @include border-radius(50%);

                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 5px;
                    height: 5px;
                    background: $titleColor;
                }
            }
        }
    }
    .title-week {
        color: #DEDEDE;
        font-size: 10pt;
        font-weight: bolder;
    }
    .title-date {
        color: #A5A2A2;
        font-size: 12pt;
        font-weight: bolder;
        padding-bottom: 4px;
        position: relative;
    }
    .card {
        margin: 0pt 3pt 10pt 3pt;
        border: 0;
        box-shadow: 0rem 0.05rem 0.5rem 0.1rem rgba(0, 0, 0, 0.10);
    }
    .card-body {
        padding: .8rem;
        text-align: left;
        font-size: 12pt;
        font-weight: bolder;
        
        svg {
            display: inline-block;
            font-size: 20pt;
            color: #7C7C7C6F;   
            vertical-align: middle;         
        }
        span {
            display: inline-block;
            color: #6F6F6F;
            padding-left: 20px;
        }

    }
    .add-btn {
        @include action-btn;

        bottom: 3pt;
    }
    .arrow-btn {
        position: absolute;
        right: 5pt;
        
        svg {
            color: #8acf9c;
        }
    }
</style>