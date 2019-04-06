import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './js/router.js'
import Mint from 'mint-ui'
Vue.use(Mint);
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

import '../node_modules/mint-ui/lib/style.css'



import '../node_modules/swiper/dist/css/swiper.css'
import '../node_modules/swiper/dist/js/swiper.js'
import Swiper from 'swiper'

import axios from 'axios'
Vue.prototype.$http = axios

import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

new Vue({
  el: '#app',
  render: h => h(App),
	router
})
