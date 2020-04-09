<template>
    <div id="main" class="w-100">
        <section>
            <h3>{{ title }}</h3>
        </section>
        <div class="px-1 mt-3">
            <b-form-input v-model="taskTitle" placeholder="Title"  required="required"></b-form-input>
            <b-form-select class="mt-2" v-model="selected" :options="priorityList"></b-form-select>
            <div class="mt-2">
                <b-form-datepicker id="example-datepicker" v-model="date" class="mb-2"></b-form-datepicker>                
            </div>
        </div>
        <button to="setTime" class="btn btn-success add-btn" @click="addTask">
            Done
        </button>
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
    },
    methods: {

        /**
         * 新增任務
         * @todo 需阻擋空值, 空值時跳提示
         */
        addTask() {
            let task = {
                finish: false,
                name: this.taskTitle,
                date: this.date || new Date(),
                priority: this.selected
            }

            this.$store.commit('ADD_TASK', task);
            this.$router.push('/setTime');
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/stylesheets/page/createTask.scss';
</style>