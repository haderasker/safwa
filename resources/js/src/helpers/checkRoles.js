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
        },
        $hasAnyRole(...roles) {
            if (!roles.length) {
                return false
            }

            for (let i = 0; i < roles.length; i++) {
                if (this.$hasRole(roles[i])) {
                    return true;
                }
            }

            return false;
        }
    }
})
