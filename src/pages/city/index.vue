<template>
    <div class='container'>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter = "letter"></city-list>
        <alphabet :cities="cities" @handleAlp =  "handleAlp"></alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import cityHeader from 'components/city/header.vue'
import citySearch from 'components/city/search.vue'
import cityList from 'components/city/list.vue'
import alphabet from 'components/city/alphabet.vue'
export default {
  name: 'City',
  props: {

    },
  data () {
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
   components: {
       cityHeader,
       citySearch,
       cityList,
       alphabet
    },
    mounted(){
       axios.get('/api/city.json').then(res => {
           console.log(res)
           res = res.data
           let data = res.data
           if(res.ret && data){               
               this.cities = data.cities
               this.hotCities = data.hotCities               
           }
       })
    },
    methods:{
        handleAlp(e){
            this.letter = e
        }
    }
}
</script>

<style scoped lang="stylus">
     
</style>
