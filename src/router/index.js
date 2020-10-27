import Vue from 'vue';
import Router from 'vue-router';

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
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
    name: "文章处理子菜单",
    children:[{
      path:"add",
      component: ()=> import('@/views/blog/blogCreated')
    },
      {
        path:"mananger",
        component: () => import('@/views/blog/blogManagement')
      },
      {
        path:"swagger",
        component: () => import('@/views/blog/blogManagement')
      }]
  },
  {
    path:"/swagger",
    component:Layout,
    name: "接口管理子菜单",
    children:[{
      path:"adminApi",
      component: ()=> import('@/views/swagger/adminApi')
    }]
  }
];

const router = new Router({
  routes:routerConfig
});


export default router;

