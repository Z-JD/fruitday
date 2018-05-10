<template>
  <div class="feat">
    <div class="feat-content">
      <div class="content">
        <div class="top" v-for="(img,index) in choice.img" :key="index">
          <img :src="img.b" />
        </div>
        <div class="figure">
          <div class="figure-wrapper" ref="figureWrapper">
            <ul class="figure-list" ref="figureList">
              <li class="figure-item"
              v-for="(infa,index) in choice.infa" :key="index">
                <a href="#">
                  <img :src="infa.image" />
                  <p class="good">{{ infa.good }}</p>
                  <span class="rate">￥{{ infa.rate }} / <em>{{ infa.num }}</em></span>
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
.feat
  width: 100%
  padding-bottom: 30px
  .feat-content
    width: 100%
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
</style>
