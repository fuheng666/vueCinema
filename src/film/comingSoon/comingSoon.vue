<template>
  <h1>comingSonn</h1>
</template>
<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  
 beforeMount () {
    Toast.clear()
  }
}
</script>

<style>

</style>