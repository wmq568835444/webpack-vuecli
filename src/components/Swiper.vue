<template>
  
    <swiper :options="swiperOption" v-if="list.length">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
          <img :src="item.imgUrl"/>
      </swiper-slide>
     
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  
</template>
<script>
export default {
  name: 'HomeSwiper', 
  props:{
    list:Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
  
}
</script>

<style scoped lang="stylus">
.container 
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  img 
    width:100%

</style>
