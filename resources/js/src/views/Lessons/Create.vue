<template>
    <steps :lesson="lesson"></steps>
</template>

<script>
import Steps from './components/Steps'

export default {
    components: {
        Steps
    },
    data() {
        return {
            lesson: {}
        }
    }
}
</script>

<style lang="scss" scoped></style>
