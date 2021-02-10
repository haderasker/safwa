<template>
    <div>
        <a @click.prevent="startExam" class="router-link-exact-active router-link-active">
            {{ $t('general.start_exam') }}
        </a>
    </div>
</template>

<script>
import safwaAxios from "../axios";

export default {
    methods: {
        async startExam() {
            await safwaAxios.get(`students/exams/${this.params.data.id}/start`)

            this.$router.push({
                name: 'student-exam',
                params: {
                    id: this.params.data.id
                }
            }).catch()
        }
    }
}
</script>

<style lang="scss" scoped></style>
