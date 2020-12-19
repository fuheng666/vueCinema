<template>
  <div class="swiper-container" id='swiper'>
    <div class="swiper-wrapper">
      <div
        class='swiper-slide SPACING'
        v-for='(item,index) in list.actors'
        :key='index'
      >
    <img :src="item.avatarAddress" alt="">
    <p class="name">{{item.name}}</p>
     <p class="role">{{item.role}}</p>
      </div>
    </div>
</div>
</template>
<script>
import Swiper from 'swiper'
export default {
  // data(){
  //     return {
  //       list:[{
  //         img:'1',
  //         name:'你好'
  //       },{
  //         img:'1',
  //         name:'你好'
  //       },{
  //         img:'1',
  //         name:'你好'
  //       },{
  //         img:'1',
  //         name:'你好'
  //       }]
  //     }
  // },
  props: ['list'],
  mounted () {
    new Swiper('#swiper', {
      slidesPerView: 4,
      spaceBetween: 30
    })
  }
}
</script>
<style lang="scss" scoped>
#swiper{
  width: auto;
  padding: .1rem;
    height: auto;
    img{
      width: .85rem;
      height: .85rem;
     }
     .name{
       font-size: .12rem;
       color:#191a1b ;
       text-align: center;
       margin-top:.1rem ;
     }
     .role{
       text-align: center;
       margin-top:.05rem ;
        font-size: .10rem;
        color: #797d82;
     }
}
</style>