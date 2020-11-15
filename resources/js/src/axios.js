import axios from 'axios'
import store from "./store/store";

const baseURL = process.env.MIX_APP_URL
const API_URL = 'api/v2/'
const routesToExcludeFromAPIParameter = [
    '/login',
    '/register',
    '/password/email',
    '/password/reset',
    '/email/resend',
    '/logout'
]

const safwaAxios = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Accept': 'application/json'
    }
})

// declare a request interceptor
safwaAxios.interceptors.request.use(async config => {
    // perform a task before the request is sent
    if (!routesToExcludeFromAPIParameter.includes(config.url)) {
        config.url = API_URL + config.url
    }

    return config
}, error => {
    // handle the error
    return Promise.reject(error)
})

safwaAxios.interceptors.response.use(r => r, async error => {
    // if server crashed
    if (error.config && error.response && error.response.status === 500) {
        return
    }

    // if user try to make an unAuthenticated action
    if (error.config && error.response && error.response.status === 401) {
        // logout
        await store.dispatch('Authentication/logout')

        // if we are already in login page return
        if (!window.location.pathname === '/login') {
            window.location.href = '/login'
        }

        return
    }

    return Promise.reject(error)
})

export default safwaAxios
