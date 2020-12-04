<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-1/2">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="totalStudents"
                    :statisticTitle="$t('dashboard.total_students')"/>
            </div>
            <div class="vx-col w-1/2">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="totalGraduates"
                    :statisticTitle="$t('dashboard.total_graduates')"/>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="levelOneStudents"
                    :statisticTitle="$t('dashboard.level_one_students')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="levelTwoStudents"
                    :statisticTitle="$t('dashboard.level_two_students')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="levelThreeStudents"
                    :statisticTitle="$t('dashboard.level_three_students')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="levelFourStudents"
                    :statisticTitle="$t('dashboard.level_four_students')"/>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="doctrineShafi"
                    :statisticTitle="$t('dashboard.doctrine_shafi')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="doctrineMaliki"
                    :statisticTitle="$t('dashboard.doctrine_maliki')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="doctrineHanafi"
                    :statisticTitle="$t('dashboard.doctrine_hanafi')"/>
            </div>
            <div class="vx-col w-1/4">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="EyeIcon"
                    :statistic="doctrineHanbali"
                    :statisticTitle="$t('dashboard.doctrine_hanbali')"/>
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
    },
}
</script>

<style lang="scss" scoped></style>
