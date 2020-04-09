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
        <alertTipBox :msg="errMsg" :showBox="showMsg"></alertTipBox>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import alertTipBox from '@/components/alertTipBox.vue';

export default {
    data() {
        return {
            title: 'Create Task',
            taskTitle: '',
            taskContent: '',
            date: '',
            errMsg: '',
            showMsg: false,
            selected: 'normal',
            priorityList: [
                { value: 'normal', text: 'normal'},
                { value: 'important', text: 'important' }
            ]
        }
    },
    computed: {
        ...mapGetters(['taskList'])
    },
    components: {
        alertTipBox
    },
    methods: {
        
        /**
         * 新增任務
         */
        addTask() {
            if(!this.validVal()) {
                this.alertMsg(true);
                return;
            } else {
                this.alertMsg(false);
            }

            let id = this.taskList.length;
            let task = {
                id: id,
                finish: false,
                name: this.taskTitle,
                date: this.date || new Date(),
                priority: this.selected
            }

            this.$store.commit('ADD_TASK', task);
            this.$store.commit('DO_TASK', id);
            this.$router.push('/setTime');
        },

        /**
         * 檢測值是否合法
         */
        validVal() {
            if(this.taskTitle) {
                return true;
            }

            return false;
        },

        /**
         * 顯示提示框
         */
        alertMsg(show) {
            if(show) {
                this.errMsg = '請輸入任務名!';
                this.showMsg = true;
            } else {
                this.errMsg = '';
                this.showMsg = false;
            }            
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/stylesheets/page/createTask.scss';
</style>