import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

require('../node_modules/normalize.css/normalize.css');
require('../node_modules/reset-css/reset.css');

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
