<template>
    <footer>
        <span><b-icon-list-ul></b-icon-list-ul></span>
        <span><b-icon-alarm></b-icon-alarm></span>
        <span><b-icon-graph-up></b-icon-graph-up></span>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/stylesheets/_variables.scss';
    footer {
        position: fixed;
        z-index: $max-zIndex;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px 5px;
        color: #fff;
        background-color: rgba(0,129,185,1.00);
        background-image: linear-gradient(0deg,rgba(255,255,255,0.00) 0%,rgba(20,168,59,1.00) 100%);

        span {
            display: inline-block;
            width: 33.3%;
            font-weight: bolder;
            font-size: 20pt;
        }
    }
</style>