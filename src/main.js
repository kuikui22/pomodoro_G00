import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import routes from '@/router/router.js';
import store from '@/store/store.js';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//use vue-router
Vue.use(VueRouter);
const router = new VueRouter({
	routes,
	mode: 'hash',
	strict: process.env.NODE_ENV !== 'production', //build環境下關閉嚴格模式
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
