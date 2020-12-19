<template>
  <div>
   <header>
       <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"

    @cancel="onCancel"
  />
   </header>
    <main>
       <div v-if='value'>
          <van-list>
            <li class="nearest"></li>
            <van-cell v-for="item in filterCinema" :key="item.name" :title="item.name" />
          </van-list>
      </div>
       <ul v-else>
         <div class="nearest">离你最近</div>
         <li  v-for="item in cinemaListGet" :key="item.name">{{item.name}}</li>
      </ul>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, List, cell } from 'vant'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
Vue.use(Search).use(List).use(cell)
export default {
  data () {
    return {
      value: ''
    }
  },
  beforeMount () {
    this.updateIsShow(false)
  },
  methods: {
    ...mapActions('cinemaModule', ['getCinema']),
    ...mapMutations('tabBarModule', ['updateIsShow']),
    onCancel () {
      this.$router.back()
      this.updateIsShow(true)
    }
  },
  computed: {
    ...mapGetters('cinemaModule', ['cinemaListGet']),
    ...mapState('cinemaModule', ['cinemaList']),
    filterCinema () {
      return this.$store.state.cinemaModule.cinemaList.filter(value => value.name.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  mounted () {
    this.getCinema()
  }
}
</script>
<style lang="scss" scoped>
  header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
  }
  .nearest{
    width: 100%;
    height: .8rem;
    line-height: 1.3rem;
    font-size: .13rem;
    color: #bdc0c5;
  }
  main ul li {
    padding: .1rem;
    float: left;
    height: .3rem;
    background-color: hsla(0,0%,96%,.6);
    line-height: .14rem;
    border-radius: .03rem;
    font-size: .13rem;
    padding: .08rem .12rem;
    margin: .1rem;
    margin-bottom: .0rem;

  }
</style>