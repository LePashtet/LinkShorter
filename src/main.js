import Vue from 'vue';
import App from './App.vue';
import router from './routes.js'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)

import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
