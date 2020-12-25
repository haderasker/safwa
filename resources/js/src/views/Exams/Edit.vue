<template>
    <steps :exam="exam"></steps>
</template>

<script>
import Steps from "./components/Steps";
import safwaAxios from "../../axios";

export default {
    components: {Steps},
    data() {
        return {
            exam: {}
        }
    },
    mounted() {
        this.loadExam()
    },
    methods: {
        async loadExam() {
            const response = await safwaAxios.get(`exams/${this.$route.params.id}`)

            this.exam = {
                ...response.data,
                type: {
                    id: response.data.type,
                    name: this.$t(`exams.types.${response.data.type}`)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
