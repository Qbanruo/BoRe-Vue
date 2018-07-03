<template>
  <div class="home">
    <div class="home-banner">
      <yd-slider autoplay="3000">
        <yd-slider-item v-for="banner in bannerList" :key="banner.id">
          <img :src="banner.logoUrl">
        </yd-slider-item>
      </yd-slider>
    </div>
    <div class="home-nav">
      <mt-navbar>
        <div class="home-nav-link">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="bars" size="2x"/>
            <span>红包奖励</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="trophy" size="2x"/>
            <span>销售排名</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="file-alt" size="2x"/>
            <span>历史订单</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link" @click="goToPageMessage()">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="comment-dots" size="2x"/>
            <span>最新消息</span>
          </mt-tab-item>
        </div>
      </mt-navbar>
      <mt-navbar>
        <div class="home-nav-link">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="chart-line" size="2x"/>
            <span>统计报表</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="bookmark" size="2x"/>
            <span>延保资料</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="video" size="2x"/>
            <span>在线学习</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="graduation-cap" size="2x"/>
            <span>销售技巧</span>
          </mt-tab-item>
        </div>
      </mt-navbar>
    </div>
    <bottomNav :select="selected"></bottomNav>
  </div>
</template>
<script>
import bottomNav from '../public/bottom'
import api from '../../api/index'
import {loadData, defaultPreHandler} from '../../common/utils'

export default {
  name: 'home',
  components: {
    bottomNav
  },
  data () {
    return {
      selected: 'home',
      bannerList: [],
      page: 1
    }
  },
  async created () {
    let param = {
      page: this.page,
      materialType: 3
    }
    await loadData(() => {
      return api.getMaterials(param)
    }, data => {
      this.bannerList = data
    }, defaultPreHandler, false)
  },
  methods: {
    goToPageMessage: function () {
      this.$router.push({
        name: 'message'
      })
    }
  }
}
</script>
<style scoped lang="stylus">
  .home-nav
    .home-nav-link
      flex 1

</style>
