<template>
    <div>
        <admin v-if="$hasRole('admin')"></admin>
        <teacher v-if="$hasRole('teacher')"></teacher>
        <student v-if="$hasRole('student')"></student>
    </div>
</template>

<script>
import Admin from "./Admin";
import Student from "./Student";
import Teacher from "./Teacher";
export default {
    components: {
        Admin,
        Student,
        Teacher
    }
}
</script>
