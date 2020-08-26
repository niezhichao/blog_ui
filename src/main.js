// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import './assets/theme/index.css'
import Element from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
Vue.config.productionTip = false

Vue.use(Element);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
