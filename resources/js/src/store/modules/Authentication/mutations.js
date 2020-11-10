export default {
    SET_PROFILE(state, profile) {
        state.profile = profile
    },

    SET_IS_AUTHENTICATED(state, isAuthenticated) {
        state.isAuthenticated = isAuthenticated
    },

    SET_ROLES(state, roles) {
        state.roles = roles
    },

    LOGOUT(state) {
        state.isAuthenticated = false
        state.profile = {}
        state.roles = []
    },
}
