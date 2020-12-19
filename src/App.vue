<template>
  <div id="app">
  <transition enter-active-class='enter' leave-active-class='leave' mode="out-in">
     <router-view></router-view>
  </transition>
    <TabBar :list='list'></TabBar>
  </div>
</template>

<script>
import TabBar from './components/TabBar'
import { Toast } from 'vant'
export default {
  components: {
    TabBar
  },
  beforeUpdate () {
    // console.log(this.$store)
     Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
      duration: 0
    })
  },
  data () {
    return {
      list: [
        { id: 0, title: '电影', path: '/film' },
        { id: 1, title: '影院', path: '/Cinema' },
        { id: 2, title: '我的', path: '/Center' },
      ]
    }
  }
}
</script>
<style lang="scss">
  *{box-sizing: border-box;}
  .enter{
    animation: like .5s ease 0s;
  }
  .leave{
  animation: like .5s ease 0s reverse;
  }
  @keyframes like{
    from{
       opacity: 0;
      transform: translateY(-3rem);
    }
    to{
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>