<template>
    <steps :year="academicYear"></steps>
</template>

<script>
import Steps from "./components/Steps";

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
    }
}
</script>

<style lang="scss" scoped></style>
