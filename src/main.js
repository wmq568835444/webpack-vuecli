// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
/** 移动端click延迟300ms */
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
