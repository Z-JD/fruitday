<template>
  <div class="product">
    <div class="product-content">
      <div class="title">
        <a href="">
          <h2>果园热卖
            <i class="icon-cheveron-right"></i>
          </h2>
        </a>
      </div>
      <div class="top">
        <a href="">
          <div class="top-content">
            <img :src="desc.avatar" />
            <div class="desc">
              <h5 class="name">{{ desc.name }}</h5>
              <p class="info">{{ desc.info }}</p>
              <span class="surplus">￥{{ desc.price }} / <em>{{ desc.surplus }}个</em></span>
              <span class="icon-add_circle"></span>
            </div>
          </div>
        </a>
      </div>
      <div class="figure">
        <div class="figure-wrapper" ref="figureWrapper">
          <ul class="figure-list" ref="figureList">
            <li class="figure-item"
            v-for="(pic,index) in desc.pics" :key="index">
              <a href="">
                <img :src="pic.image" />
                <p class="good">{{ pic.good }}</p>
                <span class="rate">￥{{ pic.rate }} / <em>{{ pic.num }}</em></span>
                <span class="icon-add_circle"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="application/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  props: {
    desc: {
      type: Object
    }
  },
  watch: {
    'desc' () {
      this.$nextTick(() => {
        this._initPics()
      })
    }
  },
  methods: {
    _initPics () {
      if (this.desc.pics) {
        let picWidth = 120
        let margin = 6
        let width = (picWidth + margin) * this.desc.pics.length - margin
        this.$refs.figureList.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.figureWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            })
          } else {
            this.picScroll.refresh()
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.product
  width: 100%
  padding-bottom: 30px
  .product-content
    width: 100%
    .title
      margin-top: 10px
      font-size: 24px
      text-align: center
      padding: 20px 0
      border-bottom: 1px solid #f0f0f0
      a
        text-decoration: none
        color: #3a3a3a
        h2,.icon-cheveron-right
          display: inline-block
          vertical-align: top
    .top
      width: 90%
      margin: 0 auto
      a
        text-decoration: none
        color: #3a3a3a
        .top-content
          width: 100%
          img,.desc
            display: inline-block
            vertical-align: top
          img
            width: 230px
            height: 230px
          .desc
            margin: 18px
            width: 390px
            .name
              font-size: 28px
              padding-bottom: 8px
              letter-spacing: 1px
              white-space: nowrap
              overflow: hidden
              text-overflow: ellipsis
              color: #3a3a3a
            .info
              font-size: 26px
              color: #878787
              padding-bottom: 76px
              white-space: nowrap
              overflow: hidden
              text-overflow: ellipsis
            .surplus
              font-size: 36px
              color: #ff8000
              em
                font-size: 32px
            .icon-add_circle
              font-size: 32px
              position: absolute
              right: 4%
              color: #ff8000
              margin-top: 4px
    .figure
      width: 100%
      display: flex
      .figure-wrapper
        overflow: hidden
        white-space: nowrap
        .figure-list
          list-style: none
          .figure-item
            display: inline-block
            margin-right: 24px
            width: 200px
            height: 180px
            &:last-child
              margin: 0
            a
              display: block
              text-align: center
              width: 100%
              height: 100%
              box-sizing: border-box
              padding: 6px 0
              text-decoration: none
              max-width: 180px
              min-width: 80px
              img
                width: 190px
                height: 190px
              .good
                font-size: 26px
                color: #3a3a3a
                text-align: center
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                padding-bottom: 2px
              .rate
                font-size: 26px
                color: #ff8000
                letter-spacing: -1px
                text-align: center
                overflow: hidden
                text-overflow: ellipsis
              .icon-add_circle
                font-size: 32px
                color: #ff8000
</style>
