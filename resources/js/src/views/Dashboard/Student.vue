<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-1/3" v-for="lesson in lessons">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="lesson.name"
                    :statisticTitle="lesson.subject"/>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-1/3" v-for="subject in subjects">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="subject.percentage"
                    :statisticTitle="subject.name"/>
            </div>
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
            subjects: [],
            lessons: []
        }
    },
    mounted() {
        this.getStudentSubjects()
        this.getStudentLessons()
    },
    methods: {
        getStudentSubjects() {
            this.subjects = [
                {
                    name: 'Subject one',
                    percentage: 50
                },
                {
                    name: 'Subject Two',
                    percentage: 30
                },
                {
                    name: 'Subject Three',
                    percentage: 70
                },
                {
                    name: 'Subject Four',
                    percentage: 60
                },
                {
                    name: 'Subject Five',
                    percentage: 40
                },
                {
                    name: 'Subject Six',
                    percentage: 90
                }
            ]
        },
        getStudentLessons() {
            this.lessons = [
                {
                    name: 'Lesson One',
                    subject: 'Subject One'
                },
                {
                    name: 'Lesson Two',
                    subject: 'Subject Two'
                },
                {
                    name: 'Lesson Three',
                    subject: 'Subject Three'
                },
                {
                    name: 'Lesson Four',
                    subject: 'Subject Four'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>
