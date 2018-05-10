<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script type="application/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  props: ['listImg'],
  mounted () {
    console.log('mounted', this)
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true,
      speed: 600,
      autoplay: {
        delay: '3000',
        disableOnInteraction: false
      },
      onTouchEnd: function () {
        swiper.startAutoplay()
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.swiper-container
  width: 100%
  height: 280px
  .swiper-wrapper
    width: 100%
    height: 100%
    .swiper-slide
      background-position: center
      background-size: cover
      width: 100%
      height: 100%
      img
        width: 100%
        height: 100%
    .swiper-pagination
      width: 16px
      height: 16px
      display: inline-block
      background: #7c5e53
</style>
