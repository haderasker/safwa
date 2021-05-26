<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-1/2">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UsersIcon"
                    :statistic="statistic.totalStudents"
                    :statisticTitle="$t('dashboard.total_students')"/>
            </div>
            <div class="vx-col w-1/2">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UsersIcon"
                    :statistic="statistic.totalGraduates"
                    :statisticTitle="$t('dashboard.total_graduates')"/>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UserCheckIcon"
                    :statistic="statistic.levelOneStudents"
                    :statisticTitle="$t('dashboard.level_one_students')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UserCheckIcon"
                    :statistic="statistic.levelTwoStudents"
                    :statisticTitle="$t('dashboard.level_two_students')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UserCheckIcon"
                    :statistic="statistic.levelThreeStudents"
                    :statisticTitle="$t('dashboard.level_three_students')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UserCheckIcon"
                    :statistic="statistic.levelFourStudents"
                    :statisticTitle="$t('dashboard.level_four_students')"/>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UserIcon"
                    :statistic="statistic.doctrineShafi"
                    :statisticTitle="$t('dashboard.doctrine_shafi')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UserIcon"
                    :statistic="statistic.doctrineMaliki"
                    :statisticTitle="$t('dashboard.doctrine_maliki')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UserIcon"
                    :statistic="statistic.doctrineHanafi"
                    :statisticTitle="$t('dashboard.doctrine_hanafi')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UserIcon"
                    :statistic="statistic.doctrineHanbali"
                    :statisticTitle="$t('dashboard.doctrine_hanbali')"/>
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
            statistic: {
                totalStudents: 100,
                totalGraduates: 50,
                levelOneStudents: 10,
                levelTwoStudents: 10,
                levelThreeStudents: 10,
                levelFourStudents: 10,
                doctrineShafi: 30,
                doctrineMaliki: 30,
                doctrineHanafi: 30,
                doctrineHanbali: 30,
            }
        }
    },

    mounted() {
        this.loadStatistics()
    },

    methods: {
        async loadStatistics() {
            const response = await safwaAxios.get(`statistics/admin`)

            this.statistic = response.data
        }
    }
}
</script>

<style lang="scss" scoped></style>
