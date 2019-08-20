import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import app from '@/components/index.vue'


export default new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/:file',
      component: app
    }

]})
