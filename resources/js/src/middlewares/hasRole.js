import store from '../store/store'

export const hasRole = (...roles) => {
    return (to, from, next) => {
        // if user does not pass any roles
        if (!roles) {
            return next('/')
        }

        // reserved keyword to show section to anybody
        if (roles[0] === 'all') {
            return next()
        }

        // get all user roles
        const userRoles = store.getters['Authentication/getRoles']

        if(!userRoles.length) {
            return next('/')
        }

        // loop over roles array and check them all
        for (const role of roles) {
            // check if role in current.roles array
            if (userRoles.indexOf(role) === -1) {
                return next('/')
            }
        }

        return next()
    }
}
