import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en_sidebar from './lang/en/sidebar.json'
import ar_sidebar from './lang/ar/sidebar.json'
import en_navbar from './lang/en/navbar.json'
import ar_navbar from './lang/ar/navbar.json'
import en_notifications from './lang/en/notifications.json'
import ar_notifications from './lang/ar/notifications.json'
import en_dashboard from './lang/en/dashboard.json'
import ar_dashboard from './lang/ar/dashboard.json'
import en_exams from './lang/en/exams.json'
import ar_exams from './lang/ar/exams.json'
import en_academic_years from './lang/en/academic_years.json'
import ar_academic_years from './lang/ar/academic_years.json'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'ar', // set default locale
    messages: {
        en: {
            sidebar: en_sidebar,
            navbar: en_navbar,
            notifications: en_notifications,
            dashboard: en_dashboard,
            exams: en_exams,
            academic_years: en_academic_years
        },
        ar: {
            sidebar: ar_sidebar,
            navbar: ar_navbar,
            notifications: ar_notifications,
            dashboard: ar_dashboard,
            exams: ar_exams,
            academic_years: ar_academic_years
        }
    },
    silentTranslationWarn: true
})
