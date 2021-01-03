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
                            {courses: []},
                            {courses: []},
                            {courses: []},
                            {courses: []}
                        ]
                    },
                    {
                        levels: [
                            {courses: []},
                            {courses: []},
                            {courses: []},
                            {courses: []}
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
