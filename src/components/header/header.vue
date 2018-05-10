<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avater">
        <img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png" width="50" height="14" />
      </div>
      <div class="content">
        <span class="title">联合街道</span>
        <i class="icon-location"></i>
      </div>
      <div class="right" @click="showDetail">
        <i class="icon-search"></i>
      </div>
      <transition name="fade">
        <div class="detail" v-show="detailsShow">
          <div class="detail-header">
            <div class="return" @click="hideDetail">
              <i class="icon-cheveron-left"></i>
              <span class="go">返回</span>
            </div>
            <div class="detail-main">
              <input placeholder="请输入要搜索的内容" class="search">
              <span class="button">搜索</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script type="application/ecmascript-6">
export default {
  data () {
    return {
      detailsShow: false
    }
  },
  methods: {
    showDetail () {
      this.detailsShow = true
    },
    hideDetail () {
      this.detailsShow = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  width: 100%
  height: 40px
  position: relative
  background: #fff
  color: #ffffff
  overflow: hidden
  border-bottom: 3px solid #C2C2C2
  .content-wrapper
    width: 90%
    height: 40px
    margin: 0 auto
    line-height: 40px
    /*padding: 6px 0 8px 0*/
    .avater
      margin-top: 4px
    .avater,.content
      display: inline-block
      .title
        font-size: 14px
        color: #65a032
      .icon-location
        font-size: 14px
        color: #65a032
    .right
      display: inline-block
      position: absolute
      right: 40px
      .icon-search
        font-size: 16px
        color: #3a3a3a
    .detail
      position: fixed
      z-index: 100
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      opacity: 1
      background: #f0f0f0
      min-height: 100%
      &.fade-enter-active,&.fade-leave-active
        transition: all 0.5s
      &.fade-enter,&.fade-leave-active
        opacity: 0
        background: rgba(7,17,27,0)
      .detail-header
        width: 100%
        height: 88px
        background: #f8f8f8
        line-height: 88px
        display: flex
      .return
        flex: 1
        .icon-cheveron-left,.go
          font-size: 28px
          color: #65a032
      .detail-main
        flex: 6
        height: 88px
        text-align: center
        font-size: 30px
        line-height: 88px
        .search
          height: 50px
          width: 86%
          border: 1px solid #65a032
          margin-bottom: 10px
        .button
          padding: 8px 12px
          vertical-align: middle
          background: #65a032
          color: #f3f3f3
          line-height: 54px
</style>
