<template>
  <div class="navBar">
     <div class="back" >
        <slot name="img"></slot>
      </div>
      <h1><slot name='title'></slot></h1>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
  .navBar{
    position: fixed;
    top: 0;
    height: .4rem;
    width: 100%;
    z-index: 1;
    text-align: center;
    line-height: .4rem;
    background: white;
    opacity: 0;
    transition: all 1s;
    font-size: .17rem;
  }
   .back{
      height: .3rem;
      position: fixed;
      top: .05rem;
      left: .05rem;
      z-index: 9999999;
      img{
        width: .3rem;
        height: 100%;
      }
    }
</style>