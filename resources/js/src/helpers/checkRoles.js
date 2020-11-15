import Vue from 'vue'
import store from "../store/store";

Vue.mixin({
    methods: {
        $hasRole(role) {
            if (!role) {
                return false
            }

            const userRoles = store.getters['Authentication/getRoles']

            return userRoles.indexOf(role) > -1
        }
    }
})
