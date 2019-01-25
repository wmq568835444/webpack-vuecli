<template>
   <div class='container'>
       <div class="header">
        城市选择
        <router-link to="/"><div class="iconfont icon-back">&#xe624;</div></router-link>
        </div>        
    </div>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {

    },
  data () {
        return {

        }
    },
   components: {

    },
}
</script>

<style scoped lang="stylus">
    @import '~styles/mixins.styl'
    @import '~styles/varibles.styl'

    .container      
        overflow:hidden
        navheight()
        background:$bgColor
        color:$titbgColor
        font-size:16px
        .icon-back
            position: absolute
            top: 0
            left: 0            
            text-align: center
            font-size: 20px
            color: #fff
            
</style>
