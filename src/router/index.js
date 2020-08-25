import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Layout from '../views/layout/Layout';

const routerConfig = [
  {
    path:'/',
    component: Layout,
    name:"首页"
  }
];

const router = new Router({
  routes:routerConfig
});


export default router;

