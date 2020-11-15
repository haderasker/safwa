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
                    path: '/me',
                    name: 'me', // profile
                    component: () => import('./views/Me'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/notifications',
                    name: 'notifications.index',
                    component: () => import('./views/Notifications'),
                    beforeEnter: hasAnyRole('admin', 'teacher')
                },
                {
                    path: '/courses',
                    name: 'courses.index',
                    component: () => import('./views/Courses'),
                    beforeEnter: hasRole('admin')
                },
                {
                    path: '/courses/create',
                    name: 'courses.create',
                    component: () => import('./views/Courses/create'),
                    beforeEnter: hasRole('admin')
                }
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
