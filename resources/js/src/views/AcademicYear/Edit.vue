<template>
    <steps :year="academicYear"></steps>
</template>

<script>
import Steps from "./components/Steps";
import safwaAxios from "../../axios";
export default {
    components: {Steps},
    data() {
        return {
            academicYear: {
                semesters: [
                    {
                        levels: [
                            {course_ids: []},
                            {course_ids: []},
                            {course_ids: []},
                            {course_ids: []}
                        ]
                    },
                    {
                        levels: [
                            {course_ids: []},
                            {course_ids: []},
                            {course_ids: []},
                            {course_ids: []}
                        ]
                    }
                ]
            }
        }
    },
    mounted() {
        this.getYear()
    },
    methods: {
        async getYear () {
            const { data } = await safwaAxios.get(`academic-years/${this.$route.params.id}`)

            if(!data) {
                return
            }

            this.academicYear = data
        }
    }
}
</script>

<style lang="scss" scoped></style>
