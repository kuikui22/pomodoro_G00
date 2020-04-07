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
        <section class="mt-3">
            <h6>{{ chartTitle }}</h6>

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
            chartTitle: 'Completed Task'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/stylesheets/styles.scss';

    article {
        @include border-radius(5pt);

        background-color: $main-bg-color;
        background-image: $main-bg-img;
        height: 28vh;
        color: #fff;
        padding: 25pt;
        font-size: 13pt;
        font-weight: bold;
    }
    #main {

        .block {
            text-align: left;
            color: #c4c2c2;
            font-weight: bold;
            font-size: 13pt;

            small {
                font-weight: bold;
            }
        }
        .finish-font {
            color: $titleColor;
            font-size: 15pt;
        }        
    }    
</style>