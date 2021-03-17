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
            this.$vs.dialog({
                type: 'confirm',
                color: 'warning',
                title: this.$t('general.start_exam_popup_title'),
                text: this.$t('general.start_exam_popup_body', {
                    label: this.params.data.label,
                    start_at_date: this.$moment(this.params.data.published_at).format('D-M-YYYY'),
                    start_at_hour: this.$moment(this.params.data.published_at).format('h'),
                    end_at_date:  this.$moment(this.params.data.ended_at).format('D-M-YYYY'),
                    end_at_hour: this.$moment(this.params.data.ended_at).format('h'),
                    duration: this.params.data.duration
                }),
                accept: async () => {
                    this.$router.push({
                        name: 'student-exam',
                        params: {
                            id: this.params.data.id
                        }
                    }).catch()
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>
