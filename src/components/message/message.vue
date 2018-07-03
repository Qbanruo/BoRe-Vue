<template>
  <div class="message">
    <mt-navbar v-model="selected" class="message-head">
      <mt-tab-item id="unRead">未读</mt-tab-item>
      <mt-tab-item id="read">已读</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" class="message-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100">
      <mt-tab-container-item id="unRead">
        <mt-cell v-for="unReads in unRead.list" :key="unReads.id" :title="unReads.title" :label="unReads.content.replace(/<\/?.+?>/g,'')" :value="unReads.publishTime" is-link>
          <font-awesome-icon slot="icon" icon="circle" size="1x"/>
        </mt-cell>
        <div v-if="unRead.list.length > 0">
          <div class="load-more" v-show="loadMore">——我是有底线的——</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="read">
        <mt-cell v-for="reads in read.list" :key="reads.id" :title="reads.title" :label="reads.content.replace(/<\/?.+?>/g,'')" :value="reads.publishTime" is-link>
        </mt-cell>
        <div v-if="read.list.length > 0">
          <div class="load-more" v-show="loadMore">——我是有底线的——</div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import api from '../../api/index'
import {loadData, defaultPreHandler} from '../../common/utils'
import _ from 'lodash'
import moment from 'moment'

export default {
  name: 'message',
  data () {
    return {
      selected: '',
      read: {
        list: [],
        page: 0,
        loadMore: false
      },
      unRead: {
        list: [],
        page: 0,
        loadMore: false
      }
    }
  },
  async created () {
    this.selected = 'unRead'
    document.documentElement.scrollTop = document.body.scrollTop = 0
  },
  methods: {
    async loadMore () {
      let object = this[this.selected]
      if (object.loadMore) return
      object.page++
      let param = {
        page: object.page,
        read: this.selected === 'read'
      }
      await loadData(() => {
        return api.getMessage(param)
      }, data => {
        object.list.push(...data.personMessages)
        let toDay = moment().startOf('day')
        _.forEach(object.list, (item) => {
          if (toDay.isAfter(item.publishTime)) {
            item.publishTime = moment(item.publishTime).format('YYYY-MM-DD')
          } else {
            item.publishTime = moment(item.publishTime).format('h:mm')
          }
        })
      }, defaultPreHandler)
      object.loadMore = object.list.length < (10 * object.page)
    }
  },
  watch: {
    'selected': async function (status) {
      if (status === 'read' && this.read.list.length === 0) {
        await this.loadMore()
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .message-head
    position fixed
    top 0
    width 100%
    z-index 99
  .message-list
    margin-top 50px
    .mint-tab-container-wrap
      .mint-cell
        min-height 58px
        margin-top 10px
        .mint-cell-text
          font-size 14px
</style>
