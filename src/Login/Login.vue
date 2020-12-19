<template>
    <form>
      <div class='img'><img src='https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png' alt='图片记载失败'></div>
      <div><input type="text" v-model="username" placeholder="用户名"></div>
      <div><input type="password" v-model="password" placeholder="密码" autocomplete></div>
      <div><input type="button" value="登录" @click='send'></div>
      <p class="sinUp" @click="sinUp">立即注册</p>
    </form>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations, mapActions } from 'vuex'
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
        url: 'http://81.70.205.12:5555/api/user/signin',
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then((value) => {
          if (value.data.error == 0) {
            if (value.data.msg.token) {
              localStorage.setItem('token', value.data.msg.token)
              this.$router.push('/center')
            }
            name = value.data.msg.username
            this.data = value.data.msg.msg
            Toast.clear()
            console.log(name)
          } else {
            Toast.clear()
            Toast.fail(value.data.msg.msg)
          }
        })
    },
    sinUp () {
      this.$router.push('/sinUp')
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