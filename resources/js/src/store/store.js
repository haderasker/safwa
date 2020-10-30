import Vue from 'vue'
import Vuex from 'vuex'

// Import Modules
import Authentication from './modules/Authentication'
import Default from './modules/Default'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Default,
        Authentication
    },
    strict: process.env.NODE_ENV !== 'production'
})
