<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://imgjd1.fruitday.com/images/2018-02-27/25276a5eeb58f7803284358018f2d34d.jpg" /></div>
      <div class="swiper-slide"><img src="https://imgjd2.fruitday.com/images/2018-02-27/8db66ed965d47e44f18c96f950cbee11.jpg" /></div>
      <div class="swiper-slide"><img src="https://imgqn8.fruitday.com/images/2018-03-06/63118aee134ad3f57facdacbf3ab4c7e.jpg" /></div>
      <div class="swiper-slide"><img src="https://imgjd2.fruitday.com/images/2017-11-24/830ebe6b81e6f4b058c5c1c90bd73f9b.jpg" /></div>
      <div class="swiper-slide"><img src="https://imgjd6.fruitday.com/images/2018-03-06/1d10d9e4280591a7dc995767023ea128.jpg" /></div>
      <div class="swiper-slide"><img src="https://imgjd3.fruitday.com/images/2018-04-16/e7b6f65478d42bbc14a002166a78fd81.jpg" /></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      loop: true,
      speed: 600,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      onTouchEnd: function () {
        mySwiper.startAutoplay()
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.swiper-container
  width: 100%
  height: 280px
  overflow: hidden
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
        background-size: 100% 100%
</style>
