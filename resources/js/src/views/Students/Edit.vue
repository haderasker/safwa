<template>
    <student :student="studentData"></student>
</template>

<script>
import Student from "./components/student";

export default {
    components: {
        Student
    },
    data() {
        return {
            studentData: {}
        }
    }
}
</script>

<style lang="scss" scoped></style>
