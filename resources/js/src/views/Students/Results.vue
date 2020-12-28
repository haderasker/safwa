<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('student_results.title') }}</h2>
            </div>
        </div>

        <vx-card :title="$t('student_results.all_results')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('student_results.filter_tooltip')"
                            class="ml-auto md:block hidden cursor-pointer">
                    <vs-button icon="icon-settings" icon-pack="feather" @click="showFilters"/>
                </vx-tooltip>
            </template>
            <div v-if="filters" class="mb-5">
                <div class="vx-row">
                    <div class="vx-col w-1/2">
                        <vs-input class="w-full" :label-placeholder="`hema`" v-model="agFilters.name"/>
                    </div>
                    <div class="vx-col w-1/2">
                        <vs-button class="mr-3 mt-5">{{ $t('student_results.filter') }}</vs-button>
                    </div>
                </div>
            </div>
            <ag-table
                ref="agTable"
                :filters="agFilters"
                :columns="agColumns"
                :options="agOptions"
            ></ag-table>
        </vx-card>
    </div>
</template>

<script>
import AgTable from "../../components/AgTable";
import StudentResultsDataSource from "../../datasources/StudentResultsDataSource";
import tableActionColumnCell from '../../components/TableActionColumnCell'

export default {
    components: {
        AgTable,
        tableActionColumnCell
    },
    data() {
        return {
            filters: false,
            agFilters: {
                name: null
            },
            agOptions: {
                dataSource: StudentResultsDataSource
            }
        }
    },
    computed: {
        agColumns() {
            return [
                {
                    headerName: this.$t('student_results.list.column_level'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('student_results.list.column_academic_year'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('student_results.list.column_first_semester'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('student_results.list.column_second_semester'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('student_results.list.column_total'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('student_results.list.column_actions'),
                    minWidth: 170,
                    cellRendererParams: {
                        routeName: 'student-result.profile'
                    },
                    cellRendererFramework: 'tableActionColumnCell'
                },
            ]
        }
    },
    methods: {
        showFilters() {
            this.filters = !this.filters
        }
    }
}
</script>

<style lang="scss" scoped></style>
