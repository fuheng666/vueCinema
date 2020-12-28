import Vue from 'vue'
import { Icon } from 'vant'
import BetterScroll from "better-scroll";
import http from '../../http/maizuo'
Vue.use(Icon)
var module = {
  namespaced: true,
  // state
  state: {
    // 给Cinema用的
    cinemaList: [],
    CityScore: 0,
    option1: [{ text: '全城', value: 0 }],
   
    BaseApp: 0,
    BaseApplet: [
      { text: 'APP订票', value: 0 },
      { text: '前台兑换', value: 1 }
    ],
    recently: 0,
    recently1: [
      { text: '最近去过', value: 0 },
      { text: '理我最近', value: 1 }
    ]
  },
  // getters
  getters: {
    cinemaListGet (state) {
      return state.cinemaList.slice(0, 5)
    },
    // cinema
    cinemaListFind (state) {
      var distList = state.option1.find(item => item.value === state.CityScore)
      if (distList.text == '全城') {
        return state.cinemaList
      }
      return state.cinemaList.filter(
        item => item.districtName === distList.text
      )
    }
  },
  // mutations
  mutations: {
    updateIsShow (state, value) {
      state.isShow = value
    },
    // cinema
    updateCinemalist (state, value) {
      state.cinemaList = value
    },
    // cinema
    updateCityList (state, value) {
      var arr = [{ text: '全城', value: 0 }].concat(value)
      state.option1 = arr
    }
  },
  // actions
  actions: {
    // cinema
    getCinema (context) {
      http({
        url: `/api/gateway?cityId=${this.state.cityId}&ticketFlag=1&k=6091309`,
        headers: {
          "X-Host": "mall.film-ticket.cinema.list"
        }
      }).then(res => {
          context.commit("updateCinemalist", res.data.data.cinemas);
          var arr = [
            ...new Set(res.data.data.cinemas.map(value => value.districtName))
          ];
          var arr1 = arr.map((value, index) => {
            return { text: value, value: index + 1 };
          });
          context.commit("updateCityList", arr1);
          Vue.nextTick(() => {
            new BetterScroll(".cinema", {
              scrollbar: {
                fade: true
              }
            });
          });

      });
    }
  }
}

export default module