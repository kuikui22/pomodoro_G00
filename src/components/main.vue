<template>
    <main>
        <transition>
            <router-view></router-view>
        </transition>
    </main>
</template>
<style lang="scss" scoped>
    main {
        width: 100%;
        height: 100vh;
        // padding: 20px 20px 60px 20px;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .v-enter {
        transform: translateX(100%);
        opacity: 0;
    }
    .v-leave-to {
        transform: translateX(-100%);  
        opacity: 0;
              
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active {
        transition: all .3s ease;
    }
</style>