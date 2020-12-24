<template>
    <steps :course="course"></steps>
</template>

<script>
import Steps from './components/Steps'
import safwaAxios from "../../axios";

export default {
    components: {
        Steps
    },
    data() {
        return {
            course: {}
        }
    },
    mounted() {
        this.loadCourse()
    },
    methods: {
        async loadCourse() {
            const response = await safwaAxios.get(`courses/${this.$route.params.id}`);

            this.course = {
                ...response.data
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>
