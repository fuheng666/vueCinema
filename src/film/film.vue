<template>
   <div>
       <div class="container">
          <span>
              <router-link to="/film/nowPlaying" tag='span'  class="left">正在热映</router-link>
           </span>
          <span>
              <router-link to='/film/comingSoon' tag='span'  class="right">即将上映</router-link>
            </span>
       </div>
        <router-view></router-view>

   </div>
</template>
<script>
export default {

}
</script>

<style lang='scss' scoped>
.container{
    width: 100%;
    background: #fff;
    position: fixed;
    z-index: 9999;
    text-align: center;
    span{
        width: 50%;
        height: 0.5rem;
       line-height: 0.5rem;
       font-size: 0.14rem;
       display: inline-block;
    }
}
 .router-link-active{
           color: coral;
           border-bottom:coral 1px solid;
           height: 100%;
           display: inline-block;
       }
</style>