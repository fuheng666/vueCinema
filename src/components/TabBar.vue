<template>
  <ul class="tabBar" v-if='isShow'>
    <router-link :key='item.id' tag='li' :to='item.path' v-for='item in list'>{{item.title}}</router-link>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    list: {}

  },
  computed: {
    ...mapState('tabBarModule', ['isShow'])
  }
  /*  data() {
    return {
      list: [
        {id:0,title:'电影',path:'/Film'},
        {id:1,title:'影院',path:'/Cinema'},
        {id:2,title:'我的',path:'/Center'},
      ]
    }
  } */
}
</script>

<style lang='scss' scoped>
        .tabBar{
          position: fixed;
          left: 0;
          right:0;
          bottom:0;
          height:50px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #ffffff;
          z-index: 99999999;
          li{
            list-style: none;
            flex:1;
            height: 100%;
            line-height: 50px;
            text-align: center;
          }
        }
        .router-link-active{
          color: salmon;
        }
</style>