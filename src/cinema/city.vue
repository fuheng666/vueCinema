<template>
  <div>
    <van-index-bar :index-list="computedCityList" @select="handleSelect" :sticky=false>
      <div v-for="data in cityList" :key="data.type">
        <van-index-anchor :index="data.type" />
        <van-cell @click="handelChang(item.name,item.cityId)" :title="item.name" v-for="item in data.list" :key="item.cityId" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, cell } from "vant";
import { Toast } from "vant";
import axios from "axios";

Vue.use(IndexBar).use(cell);
Vue.use(IndexAnchor);
export default {
  mounted() {
    Toast.clear();
    axios("https://m.maizuo.com/gateway?k=8859378", {
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1607068294914046350000129","bc":"130600"}',
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      this.cityList = this.handleCityData(res.data.data.cities);
    });
  },
  methods: {
    handleCityData(citys) {
      const letterArr = [];
      const newCitys = [];
      for (let code = 65; code < 91; code++) {
        letterArr.push(String.fromCharCode(code));
      }
      letterArr.forEach((letter) => {
        let list = citys.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() === letter
        );
        if (list.length > 0) {
          newCitys.push({
            type: letter,
            list,
          });
        }
      });
      return newCitys;
    },
    handleSelect(index) {
      Toast(index)
    },
    handelChang(name,cityId){
      this.$store.commit('changeCityName',name)
      this.$store.commit('changeCityId',cityId)
      this.$router.back()
    }
  },
  data() {
    return {
      cityList: [],
    };
  },
  computed: {
    computedCityList() {
      return this.cityList.map((item) => item.type);
    },
  },
};
</script>

<style lang="scss">
  .van-toast--text{
        min-width: .4rem !important ;
        min-height: .4rem !important ;
  }
</style>