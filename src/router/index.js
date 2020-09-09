import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Layout from '../views/layout/Layout';

const routerConfig = [
  {
    path:'/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  },
  {
    path:"/blog",
    component:Layout,
    name: "发布文章",
    children:[{
      path:"add",
      component: ()=> import('@/views/blog/blog')
    }]
  }
];

const router = new Router({
  routes:routerConfig
});


export default router;

