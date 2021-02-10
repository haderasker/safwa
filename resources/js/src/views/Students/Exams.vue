<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('student_exams.title') }}</h2>
            </div>
        </div>

        <vx-card :title="$t('student_exams.all_exams')">
            <vs-tabs alignment="fixed">
                <vs-tab :label="$t('student_exams.upcoming_exams')">
                    <ag-table
                        ref="agUpcomingTable"
                        :filters="agUpcomingFilters"
                        :columns="agUpcomingColumns"
                        :options="agUpcomingOptions"
                    ></ag-table>
                </vs-tab>
                <vs-tab :label="$t('student_exams.finished_exams')">
                    <ag-table
                        ref="agFinishedTable"
                        :filters="agFinishedFilters"
                        :columns="agFinishedColumns"
                        :options="agFinishedOptions"
                    ></ag-table>
                </vs-tab>
            </vs-tabs>
        </vx-card>
    </div>
</template>

<script>
import AgTable from "../../components/AgTable";
import examTableActionColumnCell from "../../components/ExamTableActionColumnCell";
import examProfileTableActionColumnCell from "../../components/ExamProfileTableActionColumnCell";
import StudentUpcomingExamsDataSource from "../../datasources/StudentUpcomingExamsDataSource";
import StudentFinishedExamsDataSource from "../../datasources/StudentFinishedExamsDataSource";

export default {
    components: {
        AgTable,
        examTableActionColumnCell,
        examProfileTableActionColumnCell
    },
    data() {
        return {
            agUpcomingFilters: {
                name: null
            },
            agUpcomingOptions: {
                dataSource: StudentUpcomingExamsDataSource
            },
            agFinishedFilters: {
                name: null
            },
            agFinishedOptions: {
                dataSource: StudentFinishedExamsDataSource
            }
        }
    },
    computed: {
        agUpcomingColumns() {
            return [
                {
                    headerName: this.$t('student_exams.upcoming_list.column_name'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('student_exams.upcoming_list.column_actions'),
                    minWidth: 170,
                    cellRendererParams: {
                        routeName: 'student-course.profile'
                    },
                    cellRendererFramework: 'examTableActionColumnCell'
                },
            ]
        },
        agFinishedColumns() {
            return [
                {
                    headerName: this.$t('student_exams.finished_list.column_name'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('student_exams.finished_list.column_actions'),
                    minWidth: 170,
                    cellRendererParams: {
                        routeName: 'student-exam-profile'
                    },
                    cellRendererFramework: 'examProfileTableActionColumnCell'
                },
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>
