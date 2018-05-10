<template>
  <div class="feature">
    <div class="feature-content">
      <div class="title">
        <a href="">
          <h2>果园精选</h2>
        </a>
      </div>
      <div class="content">
        <div class="top" v-for="(img,index) in choice.img" :key="index">
          <img :src="img.a" />
        </div>
        <div class="figure">
          <div class="figure-wrapper" ref="figureWrapper">
            <ul class="figure-list" ref="figureList">
              <li class="figure-item"
              v-for="(info,index) in choice.info" :key="index">
                <a href="#">
                  <img :src="info.image" />
                  <p class="good">{{ info.good }}</p>
                  <span class="rate">￥{{ info.rate }} / <em>{{ info.num }}</em></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="application/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  props: {
    choice: {
      type: Object
    }
  },
  watch: {
    'choice' () {
      this.$nextTick(() => {
        this._initPics()
      })
    }
  },
  methods: {
    _initPics () {
      if (this.choice.info) {
        let picWidth = 120
        let margin = 6
        let width = (picWidth + margin) * this.choice.info.length - margin
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
.feature
  width: 100%
  .feature-content
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
    .content
      width: 100%
      .top
        img
          width: 100%
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
                .rate
                  font-size: 26px
                  color: #ff8000
                  letter-spacing: -1px
                  text-align: center
                  overflow: hidden
                  text-overflow: ellipsis
</style>
