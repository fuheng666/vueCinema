<template>
    <form>
      <div class='img'><img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1500354034,3407188093&fm=26&gp=0.jpg' alt='图片记载失败'></div>
      <div><input type="text" v-model="username" placeholder="用户名"></div>
      <div><input type="password" v-model="password" placeholder="密码" ></div>
      <div><input type="button" value="注册" @click='send'></div>
    </form>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)
export default {
  data () {
    return {
      username: '',
      password: '',
      data: ''
    }
  },
  beforeMount () {
     Toast.clear()
    this.updateIsShow(false)
  },
  computed: {
    ...mapState('loginModule', ['name'])
  },
  methods: {
    ...mapMutations('tabBarModule', ['updateIsShow']),
    send () {
      Toast.loading({
        message: '验证中',
        forbidClick: true,
        duration: 0
      })
      axios({
        method: 'post',
        url: 'http://81.70.205.12:5555/api/user/signup',
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then((value) => {
          console.log(value.data.error)
          if (value.data.error == 0) {
            this.$router.push('/login')
            Toast.clear()
          } else {
            Toast.clear()
            Toast.fail(value.data.msg.msg)
          }
        })
    }
  },
  beforeDestroy () {
    this.updateIsShow(true)
  }
}
</script>
<style lang="scss" scoped>
  .img{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.75rem;
    img{
      width: .6rem;
    }
  }
  [type='text'],[type='password']{
    width: 100%;
    padding: .2rem;
    border: none;
    border-bottom:.01rem solid #ededed ;
  }
  [type='button']{
    width: 100%;
    padding: .1rem;
    background: #ff5f16;
    border: none;
    margin-top: .01rem;
    color: #fff;
  }
  .sinUp{
    float: right;
    text-align: right;
    margin-top: .1rem;
    color: #ff5f16;
    font-size: .13rem;
    border-bottom:.01rem solid  #ff5f16;
    margin-right: .1rem;
  }
</style>