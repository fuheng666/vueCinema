<template>
 <div>
    <div  v-if="all">
    <div @touchmove='scorll' v-if='JSON.stringify(Delist) != "{}" ' class="detail" >
    <div class="filmscorerundowns">
      <navBar :navList='Delist.name' :class='navList?"navList":""'>
        <img slot="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
        <h1 slot='title'>{{Delist.name}}</h1>
      </navBar>
      <div class="back" @click='goBack'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
      </div>
      <div class="filmscorerundownsImg">
        <img :src="Delist.poster" alt="">
      </div>
      <div class="filmscorerundownsList">
        <h3><div><span class="title">{{Delist.name}}</span><span>{{Delist.filmType.name}}</span></div><span class="grade">{{Delist.grade}}<span> 分</span></span></h3>
        <ul class="rate-movies-page">
          <li>{{Delist.category}}</li>
          <li class="Dtime">{{Delist.premiereAt|time}}</li>
          <li>{{Delist.nation}}{{Delist.runtime| runtime}}</li>
        </ul>
        <p class="synopsis" :class='isShow?"auto":""'>{{Delist.synopsis}}</p>
        <div class="pull-up" @click='isShow = !isShow' :class='isShow?"upper":""'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg==" alt="">
        </div>
      </div>
    </div>
    <main class="castmember">
      <h3>演职人员</h3>
      <swiper :list='Delist'></swiper>
    </main>
    <footer class="footer">
        <h3 ><span>剧照</span><span @click='Oall'>全部({{Delist.photos ?Delist.photos.length:'无'}})&gt;</span ></h3>
        <div>
          <still :list='Delist'></still>
        </div>
    </footer>
      <div class="seats">选座购票</div>
  </div>
  </div>
  <div v-else>
     <navBar style="opacity:1;">
       <img  @click='Oall' slot="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
       <h1 slot="title">剧照     ({{Delist.photos ?Delist.photos.length:'无'}})</h1>
     </navBar>
     <ul class="elsePhotos">
        <li  @click=prevImage(index,Delist.photos) v-for='(item,index) in Delist.photos' :key='index'><img :src="item" alt=""></li>
     </ul>
  </div>
 </div>
</template>
<script>
import maizuo from '../http/maizuo'
import moment from 'moment'
import swiper from '../swiper/swiper'
import still from '../swiper/still'
import navBar from '../components/navBar'
import Vue from 'vue'
import { ImagePreview } from 'vant';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { Toast } from 'vant'

Vue.use(Toast)
export default {
  components: {
    swiper,
    still,
    navBar
  },
  data () {
    return {
      Delist: {},
      isShow: true,
      navList: false,
      all: true
    }
  },
  beforeMount () {
    // console.log('111');
    // this.$store.state.isShow=false
    this.updateIsShow(false)
  },
  destroyed (){
this.updateIsShow(true)
  },
  mounted () {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
      duration: 0
    })
    var fildid = this.$route.params.id
    maizuo({
      url: `https://m.maizuo.com/gateway?filmId=${fildid}&k=2683148`,
      headers: {
        'X-Host': ' mall.film-ticket.film.info'
      }
    }).then((res) => {
      try {
        this.Delist = res.data.data.film
        Toast.clear()
      } catch (e) {
        Toast.clear()
        Toast.fail('加载失败')
      }
    })
  },
  filters: {
    time (val) {
      var date = new Date(val * 1000)
      return moment(date).format('YYYY-MM-DD') + '上映'
    },
    runtime (val) {
      return val == '0' ? ' | 未知' : val + ' | 分钟'
    },
    length (val) {
      console.log(val)
      return val == 0 ? val : '暂无'
    }
  },
  methods: {
    ...mapMutations('tabBarModule', ['updateIsShow']),
     prevImage(index,Delist){
       console.log(Delist);
        ImagePreview({
           images:Delist,
           startPosition:index,
           closeable :true,
           closeIconPosition:'top-left',
           loop:false
        })
    },
    goBack () {
      this.$router.back()
      this.updateIsShow(true)
    },
    scorll () {
      var scrollTop = document.documentElement.scrollTop
      if (scrollTop > 130) {
        this.navList = true
      }
      if (scrollTop < 130) {
        this.navList = false
      }
    },
    Oall () {
      this.all = !this.all
    }
  }
  /*  beforeRouteEnter (to,from,next) {
      console.log('我的去向======>',to.path);
    console.log('我的来源======>',from.path);
    next()
  },
  beforeRouteUpdate(to,from,next) {
      console.log('我的去向======>',to.path);
    console.log('我的来源======>',from.path);
    next()
  },
  beforeRouteLeave(to,from,next) {
      console.log('我的去向======>',to.path);
    console.log('我的来源======>',from.path);
    next()
  } */
}
</script>

<style lang="scss" scoped>
.detail{
  background: #F4F4F4;
}
  .filmscorerundowns{
     background: #FFFFFF;
    position: relative;
    .filmscorerundownsImg{
      width: 100%;
      height:2rem;
      overflow: hidden;
      position: relative;
      img{
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .back{
      height: .3rem;
      position: fixed;
      top: .05rem;
      left: .05rem;
      z-index: 1;
      img{
        width: .3rem;
        height: 100%;
      }

    }
  }
  .filmscorerundownsList{
    padding: .1rem;
    h3{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .1rem;
       padding-bottom: 0rem;
      div{
        display: inline-block;
        .title{
        color: #191a1b;
        font-size: .18rem;
        height: .24rem;
        line-height: .24rem;
        margin-right: .07rem;
      }
      span:last-child{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
      }
      }
      .grade{
        width: calc(100% - 2.5rem);
          text-align: right;
          color: #ffb232;
           font-style:oblique;
            font-size: .18rem;
           span{
             font-size: .1rem;
           }
      }
    }
  }
  .rate-movies-page{
    padding: .1rem;
    li{
      font-size: .13rem;
      color: #797d82;
      margin:.06rem 0;
    }
    li:first-child{
        letter-spacing:.02rem;
    }
  }
    .synopsis{
      height:1rem;
      line-height: 0.2rem;
      font-size: .135rem;
      color: #797d82;
      margin-top: .04rem;
      transition: all .3s;
      overflow: hidden;
    }
    .auto{
      overflow: hidden;
         height:.38rem;
      line-height: 0.2rem;
      font-size: .135rem;
      color: #797d82;
      margin-top: .04rem;
      transition: all .3s;
    }
    .pull-up{
      text-align: center;
      img{
        width: 0.1rem;
      }
    }
    .upper{
      transform: rotate(180deg);
    }
    .castmember{
      margin-top:.1rem ;
      background: #FFFFFF;
      h3{
        padding: .15rem;
        font-size: .16rem;
      }
    }
    .footer{
      margin-top: .1rem;
      background: #FFFFFF;
      padding: .1rem;
      margin-bottom: .5rem;
      h3{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span:last-child{
          font-size: .13rem;
        color: #797d82;
        }
      }
    }
    .navList{
      opacity: 1;
    }
    .elsePhotos{
      margin-top: .45rem;
      display: flex;
     flex-wrap: wrap;
      li{
        flex-shrink: 0;
        width: 1.25rem;
        height:1.25rem;
        padding: .01rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .seats{
      text-align: center;
      line-height: .5rem;
      height: .5rem;
      background: #ff5f16;
      color: #fff;
      position: fixed;
      bottom:0 ;
      width: 100%;
      z-index: 1;
    }
</style>