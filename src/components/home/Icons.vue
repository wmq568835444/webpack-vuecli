<template>
  <div class="container">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div v-for="item of page" :key="item.id" class="icons">
          <img :src="item.imgUrl">
          <p class="text">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Icons",
  props: {
    list: Array
  },
  data() {
    return {      
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed:{
     pages(){
       let pages = []
       this.list.forEach((item,index) => {
         let page = Math.floor(index  / 8) 
         if(!pages[page]){
           pages[page] = []
         }   
         pages[page].push(item)
       });
       return pages
     }
  }
 
};
</script>

<style scoped lang="stylus">
.container .swiper-slide 
  display: flex
  flex-wrap: wrap 
  .icons    
    width: 187.5px
    padding: 10px
    box-sizing: border-box
    img 
      width: 150px    
    p 
      margin-top: 15px   
  

</style>
