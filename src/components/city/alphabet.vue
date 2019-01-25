<template>
   <div class='container'>
       <ul><li v-for="(item,key) of cities" :key="key"
        @click="handleAlp"
        @touchstart = "touchStart"
        @touchmove = "touchMove"
        @touchend = "touchEnd"
        >{{key}}</li></ul>    
    </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
      cities:Object
    },
  data () {
        return {
            press:false,
            timer:null
        }
    },
   components: {

    },
    methods:{
        handleAlp(e){            
            this.$emit('handleAlp',e.target.innerText)
        },
        touchStart(e){
            this.press = true
        },
        touchMove(e){
            if(this.press){
                console.log(e)
            }
        },
        touchEnd(e){
           this.press = false
        }
    }
}
</script>

<style scoped lang="stylus">
.container 
    position:absolute
    top:158px
    right:0 
    bottom:0
    width:40px
    z-index:10
    display:flex 
    flex-direction:column
    justify-content:center
    ul li 
        height:36px
        line-height:36px
        width:100%
        text-align:center        

</style>
