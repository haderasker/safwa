<template>
    <steps :lesson="lesson"></steps>
</template>

<script>
import Steps from './components/Steps'
import safwaAxios from "../../axios";

export default {
    components: {
        Steps
    },
    data() {
        return {
            lesson: {
                quiz: {
                    questions: []
                }
            }
        }
    },
    mounted() {
        this.loadLesson()
    },
    methods: {
        async loadLesson() {
            const response = await safwaAxios.get(`lessons/${this.$route.params.id}`)

            if(!response.data.quiz) response.data.quiz = {
                questions: []
            }

            this.lesson = response.data
        }
    }
}
</script>

<style lang="scss" scoped></style>
