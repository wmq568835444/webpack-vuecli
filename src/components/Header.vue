<template>
  <div class="header-box">
    <div class="header-left">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>输入的内容
    </div>
    <router-link to="/city">
      <div class="header-right">{{city}}</div>
    </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'vHeader',
  computed:{
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';
  .header-box
    display:flex
    background: $bgColor
    width:100%
    navheight()
    color:#fff
    .header-left
      display: inline-block
      padding: 0 20px
    .header-right
      display: inline-block
      line-height:$lineHeight
      width:124px
      text-align :center
      color:#fff
    .header-input
      flex: 1
      line-height:60px
      margin:14px 0
      background: #fff
      border-radius: 6px
      color: #e4e7ea
      padding:0 4px
      .icon-sousuo
        margin-right:4px
</style>
