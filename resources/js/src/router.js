import Vue from 'vue'
import Router from 'vue-router'
import {beforeEnterAuthenticatedRoutes} from './middlewares/enterAuthenticatedRoutes'
import {beforeEnterPublicRoutes} from './middlewares/enterPublicRoutes'
import {hasRole, hasAnyRole} from "./middlewares/hasRole";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('./views/Dashboard')
                },
                {
                    path: '/academic-year',
                    name: 'academic-year.list',
                    component: () => import('./views/AcademicYear')
                },
                {
                    path: '/academic-year/create',
                    name: 'academic-year.create',
                    component: () => import('./views/AcademicYear/Create')
                },
                {
                    path: '/academic-year/edit/:id',
                    name: 'academic-year.edit',
                    component: () => import('./views/AcademicYear/Edit')
                },
                {
                    path: '/exams',
                    name: 'exams.list',
                    component: () => import('./views/Exams')
                },
                {
                    path: '/exams/create',
                    name: 'exams.create',
                    component: () => import('./views/Exams/Create')
                },
                {
                    path: '/exams/edit/:id',
                    name: 'exams.edit',
                    component: () => import('./views/Exams/Edit')
                },
                {
                    path: '/results',
                    name: 'results.list',
                    component: () => import('./views/Results')
                },
                {
                    path: '/courses',
                    name: 'courses.list',
                    component: () => import('./views/Courses'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/courses/create',
                    name: 'courses.create',
                    component: () => import('./views/Courses/Create'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/courses/edit/:id',
                    name: 'courses.edit',
                    component: () => import('./views/Courses/Edit'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/lessons',
                    name: 'lessons.list',
                    component: () => import('./views/Lessons'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/lessons/create',
                    name: 'lessons.create',
                    component: () => import('./views/Lessons/create'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/lessons/edit/:id',
                    name: 'lessons.edit',
                    component: () => import('./views/Lessons/Edit'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/teachers',
                    name: 'teachers.list',
                    component: () => import('./views/Teachers')
                },
                {
                    path: '/teachers/create',
                    name: 'teachers.create',
                    component: () => import('./views/Teachers/Create')
                },
                {
                    path: '/teachers/edit/:id',
                    name: 'teachers.edit',
                    component: () => import('./views/Teachers/Edit')
                },
                {
                    path: '/students',
                    name: 'students.list',
                    component: () => import('./views/Students')
                },
                {
                    path: '/students/create',
                    name: 'students.create',
                    component: () => import('./views/Students/Create')
                },
                {
                    path: '/students/edit/:id',
                    name: 'students.edit',
                    component: () => import('./views/Students/Edit')
                },
                {
                    path: '/notifications',
                    name: 'notifications.index',
                    component: () => import('./views/Notifications'),
                    beforeEnter: hasAnyRole('admin', 'teacher')
                },
                {
                    path: '/cms',
                    name: 'cms',
                    component: () => import('./views/CMS')
                },
                {
                    path: '/student-courses',
                    name: 'student-courses',
                    component: () => import('./views/Students/Courses')
                },
                {
                    path: '/student-exams',
                    name: 'student-exams',
                    component: () => import('./views/Students/Exams')
                },
                {
                    path: '/student-results',
                    name: 'student-results',
                    component: () => import('./views/Students/Results')
                },
                {
                    path: '/me',
                    name: 'me', // profile
                    component: () => import('./views/Me'),
                    beforeEnter: hasRole('admin')
                },
            ],
            beforeEnter: beforeEnterAuthenticatedRoutes
        },
        {
            path: '',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('./views/Authentication/Register')
                },
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('./views/Authentication/Login')
                },
                {
                    path: '/forget-password',
                    name: 'forget-password',
                    component: () => import('./views/Authentication/ForgetPassword')
                },
                {
                    path: '/reset-password',
                    name: 'reset-password',
                    component: () => import('./views/Authentication/ResetPassword')
                },
                {
                    path: '/404',
                    name: '404',
                    component: () => import('./views/Errors/404')
                },
            ],
            beforeEnter: beforeEnterPublicRoutes
        },
        {
            path: '*',
            redirect: {name: '404'}
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
