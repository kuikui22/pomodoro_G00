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
    },
    SET_INTERVAL(state, intervalFunc) {
        state.timer = intervalFunc;
    },
    TIME_START(state, time) {
        
        if(state.cutdown <= 0) {
            state.cutdown = time;
        }

        if(state.cutdown > 0) {
            state.cutdown -= 1; 
        }else {
            clearInterval(state.timer);
            state.timer = null;
            state.cutdown = 0;
        }
    },
    TIME_STOP(state) {
        clearInterval(state.timer);
        state.timer = null;
    },
    TIME_RESET(state) {
        clearInterval(state.timer);
        state.timer = null;
        state.cutdown = 0;
    }
}