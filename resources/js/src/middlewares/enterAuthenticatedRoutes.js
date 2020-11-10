import isAuthenticated from "../utils/isAuthenticated";

export const beforeEnterAuthenticatedRoutes = async (to, from, next) => {
    if (await isAuthenticated()) {
        next()
    } else {
        next('/login')
    }
}
