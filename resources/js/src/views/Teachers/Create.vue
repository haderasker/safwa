<template>
    <teacher :teacher="teacherData"></teacher>
</template>

<script>
import teacher from './components/teacher'

export default {
    components: {
        teacher
    },
    data() {
        return {
            teacherData: {}
        }
    }
}
</script>

<style lang="scss" scoped></style>
