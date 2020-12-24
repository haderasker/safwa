<template>
    <steps :course="course"></steps>
</template>

<script>
import Steps from './components/Steps'

export default {
    components: {
        Steps
    },
    data() {
        return {
            course: {}
        }
    }
}
</script>

<style lang="scss" scoped></style>
