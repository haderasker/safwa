<template>
    <student :student="studentData"></student>
</template>

<script>
import Student from "./components/student";
import safwaAxios from "../../axios";

export default {
    components: {
        Student
    },
    data() {
        return {
            studentData: {}
        }
    },
    mounted() {
        this.loadStudent()
    },
    methods: {
        async loadStudent() {
            const response = await safwaAxios.get(`students/${this.$route.params.id}`)

            response.data.status = {
                id: response.data.status,
                name: this.$t(`status.${response.data.status}`)
            }

            this.studentData = response.data
        }
    }
}
</script>

<style lang="scss" scoped></style>
