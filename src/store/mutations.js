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
    },
    DO_TASK(state, task_id) {
        if(state.timer) {
           return; 
        }
        
        state.runningTask = task_id;
    },
    SET_INTERVAL(state, intervalFunc) {
        state.timer = intervalFunc;
        state.firstCutDown = true;
    },
    TIME_START(state, time) {
        
        if(state.cutdown <= 0) {
            state.cutdown = time;
            state.beStartTime = time;
        }
        
        if(state.cutdown > 0 && state.firstCutDown === true) {
            state.firstCutDown = false;
        }else if(state.cutdown > 0) {
            state.cutdown -= 1;
        }else {
            clearInterval(state.timer);
            state.timer = null;
            state.cutdown = 0;
            state.showTimesUp = true;

            if(state.runningTask !== null) {
                let task = state.taskList.find(task => state.runningTask === task.id);
                task.finish = true;
                state.runningTask = null;
            }
        }
    },
    TIME_STOP(state) {
        clearInterval(state.timer);
        state.timer = null;
    },
    TIME_RESET(state, time) {
        clearInterval(state.timer);
        state.timer = null;
        state.cutdown = time;
    },
    TIME_CLEAR(state) {
        clearInterval(state.timer);
        state.timer = null;
        state.cutdown = 0;
    }
}