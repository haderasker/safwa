<template>
    <teacher :teacher="teacherData"></teacher>
</template>

<script>
import teacher from './components/teacher'
import safwaAxios from "../../axios";

export default {
    components: {
        teacher
    },
    data() {
        return {
            teacherData: {}
        }
    },
    mounted() {
        this.loadTeacher()
    },
    methods: {
        async loadTeacher() {
            const response = await safwaAxios.get(`teachers/${this.$route.params.id}`)

            this.teacherData = response.data
        }
    }
}
</script>

<style lang="scss" scoped></style>
