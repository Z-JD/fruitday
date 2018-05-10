<template>
  <div class="footed">
    <div class="footed-item">
      <router-link to="/home">
        <i class="icon-home"></i>
        <span>首页</span>
      </router-link>
    </div>
    <div class="footed-item">
      <router-link to="/classification">
        <i class="icon-view-tile"></i>
        <span>分类</span>
      </router-link>
    </div>
    <div class="footed-item">
      <router-link to="/shopcart">
        <i class="icon-shopping_cart"></i>
        <span>购物车</span>
      </router-link>
    </div>
    <div class="footed-item">
      <router-link to="/orchard">
        <i class="icon-user"></i>
        <span>我的果园</span>
      </router-link>
    </div>
  </div>
</template>

<script type="application/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footed
  position: fixed
  bottom: 0
  display: flex
  width: 100%
  height: 82px
  line-height: 40px
  background: #f0f0f0
  .footed-item
    flex: 1
    text-align: center
    padding: 16px 0
    & > a
      display: block
      font-size: 28px
      color: rgb(77,85,93)
      text-decoration:none
      &.active
        color: #65a032
      i
        display: block
</style>
