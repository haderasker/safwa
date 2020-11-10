import store from '../store/store'

export default async () => {
    // check store first
    if (store.getters['Authentication/isAuthenticated'] === true) {
        return true
    }

    // if no store then fill it
    try {
        await store.dispatch('Authentication/getProfile')

        return true
    } catch (error) {
        return false
    }
}
