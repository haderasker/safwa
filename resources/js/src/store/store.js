import Vue from 'vue'
import Vuex from 'vuex'

// Import Modules
import Authentication from './modules/Authentication'
import Teachers from './modules/Teachers'
import Doctrines from './modules/Doctrines'
import Courses from './modules/Courses'
import Levels from './modules/Levels'
import Default from './modules/Default'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Default,
        Authentication,
        Teachers,
        Doctrines,
        Courses,
        Levels
    },
    strict: process.env.NODE_ENV !== 'production'
})
