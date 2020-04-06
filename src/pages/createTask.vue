<template>
    <div id="main" class="w-100">
        <section>
            <h3>{{ title }}</h3>
        </section>
        <div class="px-1">
            <div class="mt-3">
                <b-form-datepicker id="example-datepicker" v-model="date" class="mb-2"></b-form-datepicker>                
            </div>
            <b-form-input v-model="taskTitle" placeholder="Title"></b-form-input>
            <b-form-textarea
                id="textarea"
                v-model="taskContent"
                placeholder="Content"
                rows="3"
                max-rows="6"
                class="mt-2"
            ></b-form-textarea>
            <b-form-select class="mt-2" v-model="selected" :options="priorityList"></b-form-select>
        </div>
        <router-link tag="button" to="setTime" class="btn btn-success add-btn">
            Done
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Create Task',
            taskTitle: '',
            taskContent: '',
            date: '',
            selected: 'normal',
            priorityList: [
                { value: 'normal', text: 'normal'},
                { value: 'important', text: 'important' }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/stylesheets/styles.scss';

    #main {
        @include placeholder(#666);

        overflow: hidden;
        position: relative;
        height: 100%;

        .form-control,
        .custom-select {
            border: 0;
            font-size: 15pt;
            font-weight: bold;
            background-color: #f5f5f5;
        }        
    }
    .add-btn {
        @include action-btn;

        font-size: 15pt;
        bottom: 5pt;
    }
</style>