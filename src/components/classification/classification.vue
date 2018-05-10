<template>
  <div class="classification" @touchmove.prevent>
    <div class="classification-header">
      <div class="classification-content">
        <i class="icon-search"></i>
        <span>搜索</span>
      </div>
    </div>
    <div class="goods">
      <div class="menu_wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in Category"
            class="menu_item"
            :class="{'current': currentIndex === index}"
            :key="index"
            ref="menuList"
            @click="selectMenu(index)">
            <span class="text">{{ item.CategoryName }}</span>
          </li>
        </ul>
      </div>
      <div class="childs-wrapper" ref="childsWrapper">
        <ul>
          <li v-for="(item,index) in Category"
            class="child-list"
            :key="index"
            ref="childList">
            <h1 class="title">{{ item.CategoryName }}</h1>
            <ul>
              <li v-for="(child,childIndex) in item.Childs"
                :key="childIndex"
                class="child-item border-1px"
                @click="selectFood(food)">
                <div class="content">
                  <img :src="child.PictureUrl" height="57" width="57"/>
                  <span>{{ child.CategoryName }}</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="application/ecmascript-6">
import BScroll from 'better-scroll'
const ERR_OK = 0
export default {
  data () {
    return {
      Category: [],
      listHeight: [],
      scrollY: 0
    }
  },
  created () {
    this.$http.get('/api/Category')
      .then((response) => {
        response = response.body
        // console.log(response)
        if (response.errno === ERR_OK) {
          this.Category = response.data
          // 保证先刷新页面，然后再进行计算
          this.$nextTick(() => {
            // 初始化better-scroll对象
            this._initScroll()
            this._calculateHeight()
          })
        }
      })
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.childsScroll = new BScroll(this.$refs.childsWrapper, {
        click: true,
        probeType: 3
      })
      // 产品滚动，左边菜单跟着一起滚动
      this.childsScroll.on('scroll', (pos) => {
        // console.log(pos)
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y))
        }
      })
    },
    _calculateHeight () {
      let childList = this.$refs.childList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < childList.length; i++) {
        let item = childList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    _followScroll (index) {
      let menuList = this.$refs.menuList
      let el = menuList[index]
      this.menuScroll.scrollToElement(el, 300, 0, -100)
    },
    selectMenu (index) {
      let childList = this.$refs.childList
      let el = childList[index]
      this.childsScroll.scrollToElement(el, 300, 0, 1)
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY <= height2)) {
          this._followScroll(i)
          return i
        }
      }
      return 0
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classification
  width: 100%
  background: #fff
  position: fixed
  top: 0
  left: 0
  bottom: 82px
  z-index: 1
  .classification-header
    width: 100%
    height: 60px
    background: #f8f8f8
    border-bottom: 1px solid #d8d8d8
    .classification-content
      width: 90%
      height: 50px
      margin: 5px auto
      color: #878787
      background: #eee
      border-radius: 5px
      font-size: 12px
      text-align: center
      line-height: 50px
  .goods
    display: flex
    position: absolute
    top: 66px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu_wrapper
      flex: 0 0 120px
      width: 140px
      background: #f3f5f7
      .menu_item
        display: table
        height: 108px
        width: 112px
        padding: 0 6px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          color: #65a032
          border-left: 4px #65a032 solid
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px
          padding: 0 6px
          color: #3a3a3a
    .childs-wrapper
      flex: 1
      .child-list
        list-style: none
        height: 1140px
        .title
          padding-left: 14px
          height: 26px
          line-height: 26px
          border-left: 2px solid #d9dde1
          font-size: 12px
          color: rgb(147,153,159)
          background: #f3f5f7
        .child-item
          display: inline-block
          margin: 18px
          padding-bottom: 18px
          &:last-child
            margin-bottom: 0
          .content
            width: 120px
            height: 100px
            margin-right: 10px
            padding: 10px 20px
            text-align: center
</style>
