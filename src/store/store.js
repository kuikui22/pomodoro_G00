import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';

Vue.use(Vuex);

const state = {
	showTimesUp: false
};

const getters = {
	showTimesUp: state => state.showTimesUp
};  //state.[value] 取出 (類computed)

// const actions = {};  //state.[value] 更改 (異步改值)

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production', //build關閉嚴格模式
	state,
	getters,
	// actions,
	mutations
})