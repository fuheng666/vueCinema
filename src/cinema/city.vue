<template>
  <div>
    <van-index-bar :index-list="computedCityList"  :sticky=false>
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
import maizuo from "../http/maizuo";

Vue.use(IndexBar).use(cell);
Vue.use(IndexAnchor);
export default {
  mounted() {
    maizuo("/api/gateway?k=8859378", {
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      this.cityList = this.handleCityData(res.data.data.cities);
    });
  },
  methods: {
    handleCityData(citys) {
      console.log(citys);
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
      console.log(newCitys);
      return newCitys;
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

</style>