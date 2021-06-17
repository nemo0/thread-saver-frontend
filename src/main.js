import Vue from 'vue';
import App from './App.vue';
import router from './router/router';

import '../public/assets/css/main.css';
import '../public/assets/css/thread.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
