import Vue from 'vue';
import Clipboard from 'v-clipboard';
import VTooltip from 'v-tooltip';
import App from './App.vue';
import router from './routes';


Vue.use(Clipboard);

Vue.use(VTooltip);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
