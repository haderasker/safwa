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
import en_results from './lang/en/results.json'
import ar_results from './lang/ar/results.json'
import en_courses from './lang/en/courses.json'
import ar_courses from './lang/ar/courses.json'
import en_lessons from './lang/en/lessons.json'
import ar_lessons from './lang/ar/lessons.json'
import en_teachers from './lang/en/teachers.json'
import ar_teachers from './lang/ar/teachers.json'
import en_students from './lang/en/students.json'
import ar_students from './lang/ar/students.json'
import en_comments from './lang/en/comments.json'
import ar_comments from './lang/ar/comments.json'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'en', // set default locale
    messages: {
        en: {
            sidebar: en_sidebar,
            navbar: en_navbar,
            notifications: en_notifications,
            dashboard: en_dashboard,
            exams: en_exams,
            academic_years: en_academic_years,
            results: en_results,
            courses: en_courses,
            lessons: en_lessons,
            teachers: en_teachers,
            students: en_students,
            comments: en_comments,
        },
        ar: {
            sidebar: ar_sidebar,
            navbar: ar_navbar,
            notifications: ar_notifications,
            dashboard: ar_dashboard,
            exams: ar_exams,
            academic_years: ar_academic_years,
            results: ar_results,
            courses: ar_courses,
            lessons: ar_lessons,
            teachers: ar_teachers,
            students: ar_students,
            comments: ar_comments,
        }
    },
    silentTranslationWarn: true
})
