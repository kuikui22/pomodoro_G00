import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import { DEFAULT_TIME } from '@/services/const.js';
import { getDefaultTaskList } from '@/services/extraFun.js';

Vue.use(Vuex);

const state = {
	showTimesUp: false,
	timer: null,
	defaultTime: DEFAULT_TIME,
	beStartTime: 0,
	cutdown: 0,
	firstCutDown: true,
	taskList: getDefaultTaskList(),
	runningTask: null,	
};

const getters = {
	showTimesUp: state => state.showTimesUp,
	taskList: state => state.taskList,
	cutdown: state => state.cutdown,
	hasTimer: state => (state.timer) ? true : false,
	firstCutDown: state => state.firstCutDown,
	runningTask: state => state.runningTask,
	beStartTime: state => state.beStartTime,
};  //state.[value] 取出 (類computed)

const actions = {
	TIME_START: ({ commit, state}) => {
		
		if(state.timer) {
			return
		}

		commit('SET_INTERVAL', setInterval(() => {
				commit('TIME_START');
			},1000)
		);
	}
};  //state.[value] 更改 (異步改值)

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production', //build關閉嚴格模式
	state,
	getters,
	actions,
	mutations
})