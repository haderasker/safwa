<template>
    <steps :lesson="lesson"></steps>
</template>

<script>
import Steps from './components/Steps'
import store from "../../store/store";

export default {
    components: {
        Steps
    },
    data() {
        return {
            lesson: {
                media: [],
                quiz: {
                    questions: []
                }
            }
        }
    },
    beforeMount() {
        const roles = store.getters['Authentication/getRoles']
        const user = store.getters['Authentication/getProfile']

        if(roles.indexOf('teacher') > -1 && !user.upload_lessons) {
            this.$router.push({
                name: 'dashboard'
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>
