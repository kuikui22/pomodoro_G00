<template>
    <div id="main">
        <section>

            <p>{{ title }}</p>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Times Up!'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/stylesheets/styles.scss';
    #main {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: $main-bg-color;
        background-image: $main-bg-img;
        z-index: $top-zIndex;
        color: #fff;
        font-weight: bolder;
        font-size: 14pt;

        section {
            position: relative;
        }
    }
</style>