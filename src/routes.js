import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import app from '@/components/index.vue'
import error from '@/components/errors/error.vue'


export default new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/503',
      meta:{error: 503, text: ['The service is currently unavailable.','It may be overloaded or down for maintenance.']},
      component: error
    },
    {
      path: '/404',
      meta:{error: 404, text: ['File or Directory Not Found']},
      component: error
    },
    {
      path: '/:file',
      component: app
    },
    {
      path: '/',
      component: app
    }

]})
