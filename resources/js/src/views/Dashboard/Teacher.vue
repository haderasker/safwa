<template>
    <div class="vx-row">
        <div class="vx-col w-1/3" v-for="subject in subjects">
            <statistics-card-line
                hideChart
                class="mb-base"
                icon="EyeIcon"
                :statistic="subject.lessons"
                :statisticTitle="subject.name"/>
        </div>
    </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default {
    components: {
        StatisticsCardLine
    },
    data() {
        return {
            subjects: []
        }
    },
    mounted() {
        this.getTeacherSubjects()
    },
    methods: {
        getTeacherSubjects () {
            this.subjects = [
                {
                    name: 'subject one',
                    lessons: '15'
                },
                {
                    name: 'subject two',
                    lessons: '20'
                },
                {
                    name: 'subject three',
                    lessons: '25'
                },
                {
                    name: 'subject four',
                    lessons: '30'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>
