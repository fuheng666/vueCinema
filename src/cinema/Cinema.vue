<template>
   <div>
    <header>
       <div class="Positioning" @click='handLeft'><span class='cityName'>{{this.$store.state.cityName}}</span></div>
      <navBar style="opacity:1;">
          <h3 slot='title'>影城</h3>
      </navBar>
       <div @click="goSeach" class="navbar-search"><van-icon color='#BEBEBE' size='.25rem' name="search" /></div>
 
    </header>
    <main>
       <div style="height:.4rem"></div>
         <div class="drop-down" > 
          <van-dropdown-menu active-color="#FF5F16">
              <van-dropdown-item v-model="CityScore" :options="option1" />
              <van-dropdown-item v-model="BaseApp"  :options="BaseApplet" />
              <van-dropdown-item v-model="recently"  :options="recently1" />
          </van-dropdown-menu>
        </div>
     <div class="cinema" :style="{height:height}">
        <ul>
        <li v-for='item in cinemaListFind' :key='item.name'>
          <div class="top">
            <span>{{item.name}}</span>
            <span>{{item.lowPrice | money}}</span>
          </div>
          <div class="bottom">
            <span>{{item.address}}</span>
            <span>距离未知</span>
          </div>
        </li>
      </ul>
     </div>
    </main>
   </div>
</template>
<script>
import navBar from '../components/navBar'
import Vue from 'vue'
import { DropdownMenu, DropdownItem } from 'vant'
import { mapState, mapGetters, mapActions } from 'vuex'
/* cinema */
Vue.use(DropdownMenu).use(DropdownItem)
export default {

  /*   beforeRouteEnter(to,from,next) {
    // console.log('我的去向======>',to.path);
    // console.log('我的来源======>',from.path);
    next()
  } */
  data () {
    return {
      height:0
    }
  },

  computed: {
    ...mapState('cinemaModule', ['option1', 'BaseApplet', 'recently1']),
    ...mapGetters('cinemaModule', ['cinemaListFind']),
    CityScore: {
      get () {
        return this.$store.state.cinemaModule.CityScore
      },
      set (value) {
        this.$store.state.cinemaModule.CityScore = value
      }
    },
    BaseApp: {
      get (value) {
        return this.$store.state.cinemaModule.BaseApp
      },
      set (value) {
        this.$store.state.cinemaModule.BaseApp = value
      }
    },
    recently: {
      get (value) {
        return this.$store.state.cinemaModule.recently
      },
      set (value) {
        this.$store.state.cinemaModule.recently = value
      }
    }
  },
  components: {
    navBar
  },
  filters: {
    money (val) {
      return '￥' + val / 100 + ' 起'
    }
  },
  mounted () {
    this.height=document.documentElement.clientHeight-150+'px'
    this.getCinema()
  },
  methods: {
    ...mapActions('cinemaModule', ['getCinema']),
    goSeach () {
      // 路由起名需要传入对象
      this.$router.push({ name: 's' })
    },
    handLeft(){
      this.$router.push('/city')
    }
  }
}
</script>
<style lang="scss" scoped>
.cityName{
  display: inline-block;
  width:.5rem;
  overflow:hidden;
	white-space:nowrap;
	text-overflow: ellipsis;
}
.Positioning,.navbar-search{
  position: fixed;
  z-index: 99999;
}
.Positioning{
  top: 0;
  width: .44rem;
  height: .44rem;
  text-align: center;
  line-height: .44rem;

}
.navbar-search{
  right: 0;
  top: 0.05rem;
  width: .44rem;
  height: .44rem;
  text-align: center;
  line-height: .44rem;
}
main ul li{
  border:#ededed 1px solid ;
  border-bottom:none ;
 padding: .1rem;
 .top{
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .top span:first-child{
   font-size: .15rem;
 }
 .top span:last-child{
       color: #ff5f16;
    font-size: .15rem;
 }
 .bottom {
   color: #797d82;
    font-size: .12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .1rem;
 }
}

.cinema{
  height: 3rem;
  overflow: hidden;
  position: relative;
}

</style>