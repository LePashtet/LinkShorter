import Vue from 'vue';
import VueRouter from 'vue-router';
import app from '@/components/index.vue';

Vue.use(VueRouter);


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/:file',
      component: app,
    },
    {
      path: '/',
      component: app,
    },

  ],
});
