import Vue from 'vue'
import Router from 'vue-router'
import {beforeEnterAuthenticatedRoutes} from './middlewares/enterAuthenticatedRoutes'
import {beforeEnterPublicRoutes} from './middlewares/enterPublicRoutes'
import {checkStudentProfile} from './middlewares/checkStudentProfile'
import {hasRole, hasAnyRole} from "./middlewares/hasRole";
import multiguard from 'vue-router-multiguard';

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
                    component: () => import('./views/Dashboard'),
                    beforeEnter: multiguard([hasAnyRole('admin', 'teacher', 'student'), checkStudentProfile])
                },
                {
                    path: '/academic-year',
                    name: 'academic-years.list',
                    component: () => import('./views/AcademicYear'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/academic-year/create',
                    name: 'academic-year.create',
                    component: () => import('./views/AcademicYear/Create'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/academic-year/edit/:id',
                    name: 'academic-year.edit',
                    component: () => import('./views/AcademicYear/Edit'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/exams',
                    name: 'exams.list',
                    component: () => import('./views/Exams'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/exams/create',
                    name: 'exams.create',
                    component: () => import('./views/Exams/Create'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/exams/edit/:id',
                    name: 'exams.edit',
                    component: () => import('./views/Exams/Edit'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/results',
                    name: 'results.list',
                    component: () => import('./views/Results'),
                    beforeEnter:hasRole('admin')
                },
                {
                    path: '/courses',
                    name: 'courses.list',
                    component: () => import('./views/Courses'),
                    beforeEnter: hasAnyRole('admin', 'teacher')
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
                    beforeEnter: hasAnyRole('admin', 'teacher')
                },
                {
                    path: '/lessons/create',
                    name: 'lessons.create',
                    component: () => import('./views/Lessons/create'),
                    beforeEnter: hasAnyRole('admin', 'teacher')
                },
                {
                    path: '/lessons/edit/:id',
                    name: 'lessons.edit',
                    component: () => import('./views/Lessons/Edit'),
                    beforeEnter: hasAnyRole('admin', 'teacher')
                },
                {
                    path: '/teachers',
                    name: 'teachers.list',
                    component: () => import('./views/Teachers'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/teachers/create',
                    name: 'teachers.create',
                    component: () => import('./views/Teachers/Create'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/teachers/edit/:id',
                    name: 'teachers.edit',
                    component: () => import('./views/Teachers/Edit'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/students',
                    name: 'students.list',
                    component: () => import('./views/Students'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/students/create',
                    name: 'students.create',
                    component: () => import('./views/Students/Create'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/students/edit/:id',
                    name: 'students.edit',
                    component: () => import('./views/Students/Edit'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/notifications',
                    name: 'notifications.index',
                    component: () => import('./views/Notifications'),
                    beforeEnter: hasAnyRole('admin', 'teacher')
                },
                {
                    path: 'teacher-courses/:id',
                    name: 'teacher-course.profile',
                    component: () => import('./views/Teachers/CourseProfile'),
                    beforeEnter: hasRole('teacher')
                },
                {
                    path: '/student-courses',
                    name: 'student-courses',
                    component: () => import('./views/Students/Courses'),
                    beforeEnter: multiguard([hasRole('student'), checkStudentProfile])
                },
                {
                    path: '/student-courses/:id',
                    name: 'student-course.profile',
                    component: () => import('./views/Students/CourseProfile'),
                    beforeEnter: multiguard([hasRole('student'), checkStudentProfile])
                },
                {
                    path: '/student-lessons/:id',
                    name: 'student-lesson.profile',
                    component: () => import('./views/Students/LessonProfile'),
                    beforeEnter: multiguard([hasRole('student'), checkStudentProfile])
                },
                {
                    path: '/student-exams',
                    name: 'student-exams',
                    component: () => import('./views/Students/Exams'),
                    beforeEnter: multiguard([hasRole('student'), checkStudentProfile])
                },
                {
                    path: '/student-exams/:id',
                    name: 'student-exam',
                    component: () => import('./views/Students/Exam'),
                    beforeEnter: multiguard([hasRole('student'), checkStudentProfile])
                },
                {
                    path: '/student-exam-profile/:id',
                    name: 'student-exam-profile',
                    component: () => import('./views/Students/ExamProfile'),
                    beforeEnter: multiguard([hasRole('student'), checkStudentProfile])
                },
                {
                    path: '/student-results',
                    name: 'student-results',
                    component: () => import('./views/Students/Results'),
                    beforeEnter: multiguard([hasRole('student'), checkStudentProfile])
                },
                {
                    path: '/student-results/:id',
                    name: 'student-result.profile',
                    component: () => import('./views/Students/ResultProfile'),
                    beforeEnter: multiguard([hasRole('student'), checkStudentProfile])
                },
                {
                    path: '/me',
                    name: 'me', // profile
                    component: () => import('./views/Me'),
                    beforeEnter: multiguard([hasAnyRole('admin', 'teacher', 'student'), checkStudentProfile])
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
