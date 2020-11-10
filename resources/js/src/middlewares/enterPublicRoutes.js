import isAuthenticated from "../utils/isAuthenticated";

export const beforeEnterPublicRoutes = async (to, from, next) => {
    if (!await isAuthenticated()) {
        next()
    } else {
        next('/')
    }
}
