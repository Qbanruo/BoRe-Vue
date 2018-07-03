<template>
  <mt-tabbar v-model="selected" class="bottom">
    <mt-tab-item id="home">
      <font-awesome-icon slot="icon" icon="home" size="2x"/>
      首页
    </mt-tab-item>
    <mt-tab-item id="commission">
      <font-awesome-icon slot="icon" icon="database" size="2x"/>
      佣金
    </mt-tab-item>
    <mt-tab-item id="sales">
      <font-awesome-icon slot="icon" icon="tag" size="2x"/>
      下单
    </mt-tab-item>
    <mt-tab-item id="user">
      <font-awesome-icon slot="icon" icon="user" size="2x"/>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  props: {
    select: String
  },
  data () {
    return {
      selected: this.select
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
