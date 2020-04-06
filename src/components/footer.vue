<template>
    <footer>
        <router-link tag="span" to="taskList">
            <b-icon-list-ul></b-icon-list-ul>
        </router-link>
        <router-link tag="span" to="setTime">
            <b-icon-alarm></b-icon-alarm>
        </router-link>
        <router-link tag="span" to="taskChart">
            <b-icon-graph-up></b-icon-graph-up>
        </router-link>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/stylesheets/styles.scss';
    footer {
        position: fixed;
        z-index: $max-zIndex;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 12px 5px;
        color: #fff;
        background-color: $main-bg-color;
        background-image: $main-bg-img;

        span {
            display: inline-block;
            width: 33.3%;
            font-weight: bolder;
            font-size: 20pt;
        }
    }

    /* router class */
    .router-link-active {
        position: relative;

        &::after {
            @include border-radius(50%);

            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
            background-color: $body-bg-color;
        }
    }
</style>