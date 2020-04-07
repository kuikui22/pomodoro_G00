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
@import '@/assets/stylesheets/styles.scss';
    main {
        // padding: 0px !important;
        // background-color: black;
        // background: url('~@/assets/images/trans-am.png') no-repeat center;
        // background-size: 100% 85%;
    }
    #main {
        position: relative;
    }
    .timer {
        @include border-radius(50%);
        
        position: relative;
        left: 50%;        
        transform: translateX(-50%);
        border: 1px solid;
        width: 150pt;
        height: 150pt;
        display: flex;
        justify-content: center;
        align-items: center;
        
        p {
            font-size: 20pt;
        }
    }    
    .block__btns {

        button {
            @include border-radius(50%);

            height: 35pt;
            width: 35pt;
            box-shadow: 0rem 0.05rem 0.5rem 0.1rem rgba(0, 0, 0, 0.10);
            text-align: center;
            line-height: 100%;
            color: #b7b7b7;
            font-weight: bold;
        }
        .status-btn {
            @include border-radius(40pt);

            width: 60pt;
        }
    }
</style>