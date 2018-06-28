// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vue-ydui/dist/ydui.base.css'
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'

Vue.config.productionTip = false
Vue.use(Mint)

Vue.component(Slider.name, Slider)
Vue.component(SliderItem.name, SliderItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
