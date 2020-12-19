import Vue from 'vue'
import App from './App.vue'
import './stylesheets/reset.css'
import router from './routers/index'
import './utils/index'
import 'swiper/css/swiper.css'
import store from './stores'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
