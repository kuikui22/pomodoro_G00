import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';

Vue.use(Vuex);

const state = {
	showTimesUp: false,
	taskList: [
		{ finish: true, name: 'Work on Project A', date: new Date(), priority: 'normal'},
		{ finish: false, name: 'Work on Project B', date: new Date(), priority: 'normal' },
		{ finish: false, name: 'Work on Project C', date: new Date(), priority: 'important' },
		{ finish: false, name: 'Work on Project D', date: new Date(), priority: 'normal' },
		{ finish: false, name: 'Work on Project E', date: new Date(), priority: 'normal'},
	]
};

const getters = {
	showTimesUp: state => state.showTimesUp,
	taskList: state => state.taskList
};  //state.[value] 取出 (類computed)

// const actions = {};  //state.[value] 更改 (異步改值)

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production', //build關閉嚴格模式
	state,
	getters,
	// actions,
	mutations
})