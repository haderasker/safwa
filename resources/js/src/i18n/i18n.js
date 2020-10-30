import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './lang/en.json'
import ar from './lang/ar.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'ar', // set default locale
  messages: {
    en,
    ar
  },
  silentTranslationWarn: true
})
