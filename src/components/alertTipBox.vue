<template>
    <transition tag="div" name="alert-show">
        <div id="alert" v-show="showBox">
            {{ msg }}
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        msg: String,
        showBox: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/stylesheets/styles.scss';

    #alert {
        @include border-radius(5pt);

        margin: 0 auto;
        background-color: rgba(248,215,218, .6);
        color: #721c24;
        width: 100%;
        padding: 5pt;
    }
    .alert-show-enter,
    .alert-show-leave-to {
        opacity: 0;
    }
    .alert-show-enter-active,
    .alert-show-leave-active {
        translate: all 0.5s ease;
    }
</style>