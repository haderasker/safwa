<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-1/3" v-for="lesson in lessons">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="remove-red-eye"
                    :statistic="lesson.label"
                    :statisticTitle="lesson.course_name"/>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-1/3" v-for="subject in subjects">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="subject.name"
                    :statisticTitle="subject.lessons_count"/>
            </div>
        </div>
    </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import safwaAxios from "../../axios";

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
        this.loadStatistics()
    },
    methods: {
        async loadStatistics() {
            const response = await safwaAxios.get('statistics/student')

            this.subjects = response.data.courses
            this.lessons = response.data.lessons
        }
    }
}
</script>

<style lang="scss" scoped></style>
