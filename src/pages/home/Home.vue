<template>
  <div class="container">
    <v-header></v-header>
    <v-swiper :list = "swiperList" ></v-swiper>
    <v-icons :list = "iconList"></v-icons>
  </div>
</template>
<script>
import axios from 'axios'
import VHeader from 'components/Header'
import VSwiper from 'components/Swiper'
import VIcons from 'components/home/Icons'
export default {
  name: 'Home',
  data(){
    return {
      swiperList:[],
      recommendList:[],
      iconList:[],
      weekendList:[]
    }
  },
  components: {
    VHeader,
    VSwiper,
    VIcons
  },
  mounted(){   
    axios.get('/api/index.json').then(res => {
     res = res.data
     let data = res.data
      if(res.ret&&data){        
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
        this.iconList = data.iconList
        this.weekendList = data.weekendList
      }
    })
  }

}
</script>
