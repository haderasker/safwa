<template>
    <steps :exam="exam"></steps>
</template>

<script>
import Steps from "./components/Steps";

export default {
    components: {Steps},
    data() {
        return {
            exam: {
                questions: []
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>
