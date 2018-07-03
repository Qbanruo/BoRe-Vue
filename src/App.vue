<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #333
    font-size 14px
  .fa-file-alt
  .fa-chart-line
    color #FE633F

  .fa-trophy
  .fa-bookmark
    color #ffc107

  .fa-comment-dots
  .fa-video
    color #17B794

  .fa-bars
  .fa-graduation-cap
  .fa-circle
    color #3396E4

  .load-more
    color #999
    text-align center
    width 100%
    padding 10px 0

  .home
    .home-banner
      .yd-slider-pagination
        bottom 0.5rem
        .yd-slider-pagination-item
          background #999
        .yd-slider-pagination-item-active
          background #fff
    .home-nav
      .is-selected
         border none
         color #666
      .mint-tab-item
         padding 10px 0
      .mint-tab-item-icon
        font-size 10px
        .svg-inline--fa
          margin auto
      .mint-tab-item-label
        text-align center
        span
          display block
          width 100%
    .bottom
      .mint-tab-item-icon
        font-size 10px
        .svg-inline--fa
          margin auto
  .message
    .message-list
      .mint-tab-container-wrap
        .mint-cell
          .mint-cell-wrapper
            line-height normal
            .mint-cell-title
              font-size 9px
              .mint-cell-text
                font-size 14px
            .mint-cell-value
              font-size 14px
</style>
