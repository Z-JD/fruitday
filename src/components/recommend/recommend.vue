<template>
  <div class="recommend">
    <div class="recommend-container">
      <div class="title">
        <a href="">
          <h2>人气推荐</h2>
        </a>
      </div>
      <div class="top">
        <a href="#" v-for="(product,index) in product" :key="index">
          <div class="top-content">
            <img :src="product.imgSrc" class="img" />
            <div class="desc">
              <h5 class="name">{{ product.appellation }}</h5>
              <p class="info">{{ product.introduce }}</p>
              <span class="price">￥{{ product.price }} / <em>{{ product.specification }}</em></span>
              <span class="icon-add_circle"></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="application/ecmascript-6">
export default {
  props: {
    product: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.recommend
  width: 100%
  padding-bottom: 90px
  .recommend-container
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
    .top
      width: 90%
      margin: 0 auto
      a
        text-decoration: none
        color: #3a3a3a
        .top-content
          width: 100%
          border-bottom: 1px solid #f3f5f7
          padding-bottom: 6px
          .img,.desc
            display: inline-block
            vertical-align: top
          .img
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
            .info
              font-size: 26px
              color: #878787
              padding-bottom: 76px
              white-space: nowrap
              overflow: hidden
              text-overflow: ellipsis
            .price
              font-size: 36px
              color: #ff8000
              em
                font-size: 32px
            .icon-add_circle
              font-size: 32px
              position: absolute
              right: 4%
              color: #ff8000
              margin-top: 12px
</style>
