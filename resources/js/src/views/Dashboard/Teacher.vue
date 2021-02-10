<template>
    <div class="vx-row">
        <div class="vx-col w-1/3" v-for="subject in subjects">
            <statistics-card-line
                hideChart
                class="mb-base"
                icon="EyeIcon"
                :statistic="subject.lessons_count"
                :statisticTitle="subject.name"/>
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
            subjects: []
        }
    },
    mounted() {
        this.getTeacherSubjects()
    },
    methods: {
        async getTeacherSubjects () {
            const response = await safwaAxios.get(`statistics/teacher`)

            this.subjects = response.data
        }
    }
}
</script>

<style lang="scss" scoped></style>
