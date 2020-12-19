<template>
  <ul class="tabBar" v-if='isShow'>
    <router-link :key='item.id' tag='li' :to='item.path' v-for='item in list'><i :class="'iconfont'+' '+item.icon"></i><span>{{item.title}}</span></router-link>
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
            text-align: center;
            display: flex;
            flex-direction: column;
              color:#ccc;
              
            i{
              font-size: .25rem;
            }
            span{
              margin-top: .08rem;
            }
          }
        }
        .router-link-active{
          color: salmon !important;
        }
</style>