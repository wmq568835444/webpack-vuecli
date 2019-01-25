<template>
  <div class="container wrapper">
    <div>
        <div class="area">
          <h2>当前城市</h2>
          <ul>
            <li>{{city}}</li>
          </ul>
        </div>
        <div class="area hotecities">
        <h2>热门城市</h2>
        <ul>
          <li v-for="item of hotCities" :key="item.id" @click="handleChangeCity">{{item.name}}</li>
        </ul>
    </div>
     <div class="area" v-for="(items,key) of cities" :key="key">
        <h2 :ref="key">{{key}}</h2>
        <ul>
          <li v-for="item of items" :key="item.id" @click="handleChangeCity">{{item.name}}</li>
        </ul>
    </div>
    </div>   
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import vuex from 'vuex'
import {mapState} from 'vuex'
export default {
  name: "CityList",
  props: {
    cities:Object,
    hotCities:Array,
    letter:String
  },
  data() {
    return {};
  },
  watch:{
    letter(e){     
      this.scroll.scrollToElement(this.$refs[e][0],500)      
    }
  },
  computed:{
    ...mapState(['city'])
  },
  components: {},
   mounted(){
        this.scroll = new BScroll('.wrapper')
    },
    methods:{
      handleChangeCity(e){        
        this.$store.commit('changeCity',e.target.innerText)
        this.$router.push('/')
      }
    }

};
</script>

<style scoped lang="stylus">
  .container
    position:absolute
    overflow:hidden
    top:158px
    bottom:0
    display:flex
    flex-direction:column
    padding:0 10px
    .area       
      h2 
        display:block
        width:100%
        margin:10px 0
        text-align:left
      ul 
        display:flex
        flex-wrap:wrap
        li           
          width:30%
          line-height:44px
          margin:10px
          box-sizing:border-box

</style>
