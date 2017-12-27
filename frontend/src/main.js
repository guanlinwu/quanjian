// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import VueBus from 'vue-bus';
import PublicCore from '@/utils/publicCore.js';


import 'element-ui/lib/theme-default/index.css';

Vue.use(ElementUI);
Vue.use(VueBus);

Vue.prototype.$publicCore = new PublicCore(Vue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
