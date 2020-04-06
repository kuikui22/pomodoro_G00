<template>
    <main>
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
    </main>
</template>
<style lang="scss" scoped>
    main {
        width: 100%;
        height: 100vh;
        padding: 20px 20px 60px 20px;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .v-enter {
        opacity: 0;
        transform: translateX(50%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-50%);
    }
    .v-enter-active,
    .v-leave-active {
        transition: all .3s ease;
    }
</style>