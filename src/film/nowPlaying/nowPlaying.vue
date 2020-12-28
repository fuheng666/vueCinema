<template>
  <div class="box11">
    <van-list class="box1"
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
      @load="onLoad"
      :immediate-check = false
      offset='200'
  >
    <van-cell v-for="item in list" :key='item.filmId' class="box" @click='goDetail(item.filmId)'>
      <div class="imgbox">
         <img :src="item.poster" alt="">
      </div>
      <div class="text">
        <h3>{{item.name}}<span class="filmType">{{item.filmType.name}}</span></h3>
        <p v-if='!item.grade?false:true'>观众评分<span class="grade">{{item.grade}}</span></p>
        <p class="actors">
          <span>主演:</span>
          <span v-for='(index,val) in item.actors' :key='val'>{{index.name}}</span>
        </p>
        <p>{{item.nation}} | {{item.runtime?item.runtime:'未知' | time}}</p>
      </div>
      <p class="tickets">购票</p>
    </van-cell>
  </van-list >
    <div class="big" v-if=true></div>
  </div>
</template>
<script>
import maizuo from '@/http/maizuo'
import Vue from 'vue'
import { List,Cell } from 'vant';

Vue.use(List).use(Cell)
export default {
  data () {
    return {
      list: [],
      loading: false,
      pageNum: 1,
      total: 0,
      iShow:false,
      finished:false
    }
  },
  created () {
    maizuo({
      url: `/api/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=2715269`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
        this.total = res.data.data.total
        this.list = res.data.data.films
    })
  },
  filters: {
    time: function (value) {
      return value = value == '未知' ? '未知' : value + '分钟'
    }
  },
  methods: {
    onLoad(){
      if(this.list.length === this.total){
        this.finished = true
        return
      }
      this.pageNum++
      console.log(this.pageNum)
       maizuo({
        url: `/api/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.pageNum}&pageSize=10&type=1&k=2715269`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        this.list = [...this.list, ...res.data.data.films]
        this.loading = false
      })
    },
    goDetail (id) {
      this.$router.push(`/film/${id}`)
    },
    
  }
 
}
</script>

<style lang='scss' scoped>
  .box1{
    .imgbox{
      width: .66rem;
      height: .94rem;
      float: left;
      margin-right:.1rem ;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .text{
      line-height: .2rem;
      margin-left:.09rem;
      .filmType{
      font-size: .09rem;
      color: #fff;
      background-color: #d2d6dc;
      height: .14rem;
      line-height: .14rem;
      padding: 0 .02rem;
      border-radius: .02rem;
      margin-left:.05rem ;
      }
     h3,p{
       font-size: .1.7rem;
       font-weight: 500;
        width: 2.20rem;
      }
      h3{
        margin-bottom:.1rem ;

      }
      p{
        font-size:.13rem;
        color: #797d82;
        .grade{
          color: sandybrown;
        }
      }
      .actors{
           white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      }

    }
    .box{
       padding: 10px;
       margin-bottom: .1rem;
        
       display: flex;
      position:relative;
      .tickets{
        position: absolute;
        right: 3%;
        top: 27%;
        width: .5rem;
       height: .25rem;
      text-align: center;
      line-height: .25rem;
      color: #ff5f16;
      font-size:.13rem ;
      border: 1px solid  #ff5f16;
      }
    }
  }
  .actors{
    span{
      margin-right:.03rem;
    }
  }
  .big{
    height: .5rem;
  }
  .box11{
    padding-top: .5rem;
   
  }
</style>