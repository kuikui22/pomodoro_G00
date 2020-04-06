<template>
    <div>
        <section>
            <h3>{{ title }}</h3>
            <span>{{ month }}</span>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Task',
            month: 'May'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/stylesheets/styles.scss';
    section {
        span {
            position: absolute;
            right: 15px;
            top: 25px;
            color: $titleColor;
        }
    }
</style>