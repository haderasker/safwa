import Vue from 'vue'
import App from './App.vue'

import _ from 'lodash'
window._ = _

import moment from 'moment'
window.$moment = moment

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)

// axios
import axios from './axios.js'
Vue.prototype.$http = axios

// Filters
import './filters/filters.js'

import './helpers/checkRoles'

// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import VeeValidateLaravel from 'vee-validate-laravel';
Vue.use(VeeValidateLaravel);

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// i18n
import i18n from './i18n/i18n'

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
