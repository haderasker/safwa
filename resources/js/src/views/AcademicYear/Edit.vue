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
            academicYear: {},
            // year: {
            //     id: null,
            //     label: '',
            //     created_at: new Date(),
            //     updated_at: new Date(),
            //     semesters: [
            //         {
            //             id: null,
            //             label: '',
            //             academic_year_id: '',
            //             end: '',
            //             start: '',
            //             created_at: '',
            //             updated_at: '',
            //             levels: [
            //                 {
            //                     id: '',
            //                     course_ids: [],
            //                     level_id: '',
            //                     semester_id: '',
            //                     created_at: '',
            //                     updated_at: '',
            //                 }
            //             ]
            //         }
            //     ]
            // }
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

            data.semesters.forEach(semester => {
                semester.levels.forEach(level => {
                    level.course_ids = JSON.parse(level.course_ids)
                })
            })

            this.academicYear = data
        }
    }
}
</script>

<style lang="scss" scoped></style>
