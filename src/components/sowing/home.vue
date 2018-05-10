<template>
  <div>
    <app-banner :listImg="listImg"></app-banner>
  </div>
</template>

<script type="application/ecmascript-6">
import Banner from '@/components/home/Banner'
import a from './banner1.jpg'
import b from './banner2.jpg'
import c from './banner3.jpg'
import d from './banner4.jpg'
import e from './banner5.jpg'
import f from './banner6.jpg'
export default {
  name: 'Home',
  data () {
    return {
      listImg: [{
        url: a
      }, {
        url: b
      }, {
        url: c
      }, {
        url: d
      }, {
        url: e
      }, {
        url: f
      }]
    }
  },
  components: {
    'app-banner': Banner
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
