<template>
  <div class="container">
    <v-header></v-header>
    <swiper></swiper>
  </div>
</template>
<script>
import VHeader from 'components/Header'
import swiper from 'components/Swiper'
export default {
  name: 'Home',
  components: {
    VHeader,
    swiper
  }
}
</script>
