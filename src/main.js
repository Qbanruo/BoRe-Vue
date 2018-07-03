// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import {apiRoot} from './api/config'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vue-ydui/dist/ydui.base.css'
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faBars, faTrophy, faFileAlt, faCommentDots, faChartLine, faBookmark, faVideo, faGraduationCap, faHome, faDatabase, faTag, faUser, faCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.use(Mint, Vuex)

axios.defaults.baseURL = apiRoot
axios.defaults.timeout = 3000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.component(Slider.name, Slider)
Vue.component(SliderItem.name, SliderItem)

library.add(faBars, faTrophy, faFileAlt, faCommentDots, faChartLine, faBookmark, faVideo, faGraduationCap, faHome, faDatabase, faTag, faUser, faCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
