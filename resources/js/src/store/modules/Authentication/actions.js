import safwaAxios from "../../../axios";

export default {
    async getProfile (vuex) {
        const response = await safwaAxios.get('profile');

        vuex.dispatch('initCurrentUser', response.data)
    },

    async login(vuex, userCredentials) {
        const response = await safwaAxios.post('/login', userCredentials)

        vuex.dispatch('initCurrentUser', response.data)
    },

    async logout({commit}) {
        await safwaAxios.post('/logout')
        commit('LOGOUT')
    },

    async forgetPassword(_, payload) {
        await safwaAxios.post('/password/email', payload)
    },

    async resetPassword(_, payload) {
        await safwaAxios.post('/password/reset', payload)
    },

    async register(_, payload) {
        await safwaAxios.post('/register', payload)
    },

    updateProfile() {},

    initCurrentUser({commit}, user) {
        const roles = user.roles.map(role => role.name)
        delete user.roles

        const profile = JSON.parse(JSON.stringify(user))

        commit('SET_PROFILE', profile)
        commit('SET_ROLES', roles)
        commit('SET_IS_AUTHENTICATED', true)
    }
}
