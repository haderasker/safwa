<template>
    <vx-card :title="$t('student_course_profile.course') + ' ' + course.name">
        <vs-tabs alignment="fixed">
            <vs-tab :label="$t('student_course_profile.info')">
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <statistics-card-line
                            hideChart
                            class="mb-base"
                            icon="EyeIcon"
                            :statistic="$t('student_course_profile.description')"
                            :statisticTitle="course.description"/>
                    </div>
                </div>
            </vs-tab>

            <vs-tab :label="$t('student_course_profile.lessons')">
                <vs-table :data="course.lessons">
                    <template slot="thead">
                        <vs-th>{{ $t('student_course_profile.list.column_label') }}</vs-th>
                        <vs-th>{{ $t('student_course_profile.list.column_actions') }}</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <!-- success, danger or null -->
                        <vs-tr :state="null" :key="index" v-for="(tr, index) in data">
                            <vs-td :data="tr.label">
                                {{ tr.label }}
                            </vs-td>
                            <vs-td :data="tr.id">
                                <router-link :to="{ name: 'student-lesson.profile', params: {id: tr.id} }">{{ $t('student_course_profile.view') }}</router-link>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vs-tab>
        </vs-tabs>
    </vx-card>
</template>

<script>
import safwaAxios from "../../axios";
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default {
    components: {
        StatisticsCardLine
    },
    data() {
        return {
            course: {
                lessons: []
            }
        }
    },
    mounted() {
        this.loadCourse()
    },
    methods: {
        async loadCourse() {
            const response = await safwaAxios.get(`students/courses/${this.$route.params.id}`)

            this.course = response.data
        }
    }
}
</script>

<style lang="scss" scoped></style>
