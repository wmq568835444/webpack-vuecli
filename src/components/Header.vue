<template>
  <div class="header-box">
    <div class="header-left">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>输入的内容
    </div>
    <router-link to="/city">
      <div class="header-right">北京</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {},
  data () {
    return {}
  },
  components: {}
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
      padding: 0 .2rem
    .header-right
      display: inline-block
      line-height:$lineHeight
      width:1.24rem
      text-align :center
      color:#fff
    .header-input
      flex: 1
      line-height:0.6rem
      margin:.14rem 0
      background: #fff
      border-radius: .06rem
      color: #e4e7ea
      padding:0 .04rem
      .icon-sousuo
        margin-right:.04rem
</style>
