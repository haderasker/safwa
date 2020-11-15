import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en_sidebar from './lang/en/sidebar.json'
import ar_sidebar from './lang/ar/sidebar.json'
import en_navbar from './lang/en/navbar.json'
import ar_navbar from './lang/ar/navbar.json'
import en_notifications from './lang/en/notifications.json'
import ar_notifications from './lang/ar/notifications.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'ar', // set default locale
  messages: {
    en: {
        sidebar: en_sidebar,
        navbar: en_navbar,
        notifications: en_notifications,
    },
    ar: {
        sidebar: ar_sidebar,
        navbar: ar_navbar,
        notifications: ar_notifications
    }
  },
  silentTranslationWarn: true
})
