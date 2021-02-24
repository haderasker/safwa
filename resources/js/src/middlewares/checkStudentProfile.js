import store from '../store/store'

export const checkStudentProfile = async (to, from, next) => {

    const roles = store.getters['Authentication/getRoles']

    if (roles.indexOf('student') === -1) {
        next()
    }

    const profile = store.getters['Authentication/getProfile']

    if (!profile.doctrine_id && to.name !== 'me') {
        next('/me')
    }

    next()
}
