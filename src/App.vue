<template>
  <div id="app">
    <v-header></v-header>
    <sowing></sowing>
    <tab></tab>
    <split></split>
    <products :desc="desc"></products>
    <split></split>
    <featured :choice="choice"></featured>
    <second :choice="choice"></second>
    <split></split>
    <recommend :product="product"></recommend>
    <footed></footed>
    <router-view/>
  </div>
</template>

<script type="application/ecmascript-6">
import header from '@/components/header/header'
import sowing from '@/components/sowing/sowing'
import tab from '@/components/tab/tab'
import split from '@/components/split/split'
import products from '@/components/products/products'
import featured from '@/components/featured/featured'
import second from '@/components/featured/second'
import recommend from '@/components/recommend/recommend'
import footed from '@/components/footed/footed'
export default {
  data () {
    return {
      desc: {},
      product: [],
      choice: {}
    }
  },
  created () {
    this.$http.get('/api/product')
      .then((response) => {
        response = response.body
        console.log(response)
        this.product = response.data
      })
    this.$http.get('/api/desc')
      .then((response) => {
        response = response.body
        this.desc = response.data
      })
    this.$http.get('/api/choice')
      .then((response) => {
        response = response.body
        this.choice = response.data
      })
  },
  components: {
    'v-header': header,
    sowing,
    tab,
    split,
    products,
    featured,
    second,
    recommend,
    footed
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
