export default {
    SHOW_TIMES_UP(state, boolean) {
        state.showTimesUp = boolean;
    },
    DEL_TASK(state, task_id) {
        state.taskList.splice(task_id, 1);
    },
    CHANGE_STATUS_TASK(state, id) {
        state.taskList[id].finish = !state.taskList[id].finish;
    },
    ADD_TASK(state, task) {
        state.taskList.push(task);
        console.log(state.taskList);
    }
}