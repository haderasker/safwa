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
import en_student_courses from './lang/en/student_courses.json'
import ar_student_courses from './lang/ar/student_courses.json'
import en_student_course_profile from './lang/en/student_course_profile.json'
import ar_student_course_profile from './lang/ar/student_course_profile.json'
import en_student_lesson_profile from './lang/en/student_lesson_profile.json'
import ar_student_lesson_profile from './lang/ar/student_lesson_profile.json'
import en_general from './lang/en/general.json'
import ar_general from './lang/ar/general.json'
import en_student_exams from './lang/en/student_exams.json'
import ar_student_exams from './lang/ar/student_exams.json'
import en_student_exam from './lang/en/student_exam.json'
import ar_student_exam from './lang/ar/student_exam.json'
import en_student_results from './lang/en/student_results.json'
import ar_student_results from './lang/ar/student_results.json'
import en_student_result_profile from './lang/en/student_result_profile.json'
import ar_student_result_profile from './lang/ar/student_result_profile.json'
import en_levels from './lang/en/levels.json'
import ar_levels from './lang/ar/levels.json'
import en_profile from './lang/en/profile.json'
import ar_profile from './lang/ar/profile.json'
import en_doctrines from './lang/en/doctrines.json'
import ar_doctrines from './lang/ar/doctrines.json'
import en_countries from './lang/en/countries.json'
import ar_countries from './lang/ar/countries.json'
import en_login from './lang/en/login.json'
import ar_login from './lang/ar/login.json'
import en_reset_password from './lang/en/reset_password.json'
import ar_reset_password from './lang/ar/reset_password.json'
import en_forget_password from './lang/en/forget_password.json'
import ar_forget_password from './lang/ar/forget_password.json'
import en_register from './lang/en/register.json'
import ar_register from './lang/ar/register.json'

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
            academic_years: en_academic_years,
            results: en_results,
            courses: en_courses,
            lessons: en_lessons,
            teachers: en_teachers,
            students: en_students,
            comments: en_comments,
            student_courses: en_student_courses,
            student_course_profile: en_student_course_profile,
            student_lesson_profile: en_student_lesson_profile,
            general: en_general,
            student_exams: en_student_exams,
            student_exam: en_student_exam,
            student_results: en_student_results,
            student_result_profile: en_student_result_profile,
            levels: en_levels,
            profile: en_profile,
            doctrines: en_doctrines,
            countries: en_countries,
            login: en_login,
            register: en_register,
            forget_password: en_forget_password,
            reset_password: en_reset_password,
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
            student_courses: ar_student_courses,
            student_course_profile: ar_student_course_profile,
            student_lesson_profile: ar_student_lesson_profile,
            general: ar_general,
            student_exams: ar_student_exams,
            student_exam: ar_student_exam,
            student_results: ar_student_results,
            student_result_profile: ar_student_result_profile,
            levels: ar_levels,
            profile: ar_profile,
            doctrines: ar_doctrines,
            countries: ar_countries,
            login: ar_login,
            register: ar_register,
            forget_password: ar_forget_password,
            reset_password: ar_reset_password,
        }
    },
    silentTranslationWarn: true
})
