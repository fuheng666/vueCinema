<template>
  <div class="swiper-container" id="still">
    <div class="swiper-wrapper">
      <div
        class='swiper-slide SPACING'
        v-for='(item,index) in list.photos'
        :key='index'
         @click='prevImage(index)'
      >
    <div class="item">
      <img :src="item" alt="">
    </div>
      </div>
    </div>
</div>
</template>
<script>
import Swiper from 'swiper'
import { ImagePreview } from 'vant';
export default {
  props: ['list'],
  mounted () {
    new Swiper('#still', {
      slidesPerView: 2,
      spaceBetween: 5
    })
  },
  methods:{
      prevImage(index){
        ImagePreview({
           images:this.list.photos,
           startPosition:index,
           closeable :true,
           closeIconPosition:'top-left',
           loop:false
        })
    },
  }
}
</script>
<style lang="scss" scoped>
#still {
  margin-top: .1rem;
  width: auto;
  padding: .1rem;
    height: auto;
    .item{
      width: 1.6rem;
      height: 1rem;
      overflow: hidden;
      position: relative;
      img{
        width: 100%;
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      }
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
.ime{
  z-index: 99999999;
}
</style>