import Vue from 'vue'
import App from './App.vue'
import './stylesheets/reset.css'
import router from './routers/index'
import utils from './utils/index'
import swperCss from './swiper/css/swiper-bundle.css'
import swperJs from './swiper/js/swiper-bundle'
import store from './stores'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
