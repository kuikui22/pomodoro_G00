<template>
    <div id="main">
        <section class="pb-2">
            <h3>{{ title }}</h3>
        </section>
        <div class="timer">
            <!-- <img :src="img" class="w-100" /> -->
            <p>25:00</p>
        </div>
        <div class="block__reps my-4">
            <b-form-spinbutton id="sb-inline" min="1" max="25" v-model="value" inline></b-form-spinbutton>
        </div>
        <b-row class="block__btns">
            <b-col>
                <button class="btn">
                    <b-icon-arrow-clockwise></b-icon-arrow-clockwise>
                </button>
            </b-col>
            <b-col>
                <button class="btn status-btn">{{ TaskStatus }}</button>
            </b-col>
            <b-col>
                <button class="btn">
                    <b-icon-x></b-icon-x>
                </button>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Set Time',
            img: require('@/assets/images/trans-am.png'),
            TaskStatus: 'Start',
            value: 5
        };
    }
}
</script>
<style lang="scss">
    @import '@/assets/stylesheets/page/setTime.scss';
</style>