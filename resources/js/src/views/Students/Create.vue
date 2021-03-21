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
            studentData: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
