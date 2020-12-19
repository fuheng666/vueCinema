import Vue from 'vue'
import Vuex from 'vuex'
import cinemaModule from './modules/cinema'
import tabBarModule from './modules/tabBar'
import loginModule from './modules/login'
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex)
// 初始化一个实例
const store = new Vuex.Store({
  //{ storage: window.sessionStorage }短暂缓存这个
  plugins: [createPersistedState()],
  state: {
    cityId: "310100",
    cityName: "上海"
  },
  mutations: {
    changeCityName(state, name) {
      state.cityName = name;
    },
    changeCityId(state, cityId) {
      state.cityId = cityId;
    }
  },
  modules: {
    cinemaModule,
    tabBarModule,
    loginModule
  }
});

export default store