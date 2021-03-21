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
            course: {
                media: []
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
