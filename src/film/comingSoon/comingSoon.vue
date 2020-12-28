<template>
  <div class="box11">
    <ul class="box1"
      infinite-scroll-disabled="loading"
        infinite-scroll-distance="0"
        infinite-scroll-immediate-check='true'
  >
    <li v-for="item in list" :key='item.filmId' class="box" @click='goDetail(item.filmId)'>
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
      <p class="tickets">预购</p>
    </li>
    <div class="big" v-if=iShow></div>
  </ul>
  </div>
</template>
<script>
import maizuo from '@/http/maizuo'
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui'


export default {
  data () {
    return {
      list: [],
      loading: false,
      pageNum: 1,
      total: 0,
      iShow:false
    }
  },
  created () {
   
    maizuo({
      url: `/api/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=2&k=4788462`,
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
        width: 2.29rem;
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
      color:#ffb232;
      font-size:.13rem ;
      border: 1px solid  #ffb232;
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
    padding-bottom:.5rem;
  }
</style>