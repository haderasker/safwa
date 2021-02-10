<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('results.title') }}</h2>
            </div>
        </div>

        <vx-card :title="$t('results.all_results')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('results.filter_tooltip')"
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
                        <vs-button class="mr-3 mt-5">{{ $t('results.filter') }}</vs-button>
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
import ResultsDataSource from "../../datasources/ResultsDataSource";

export default {
    components: {AgTable},
    data() {
        return {
            filters: false,
            agFilters: {
                name: ''
            },
            agOptions: {
                dataSource: ResultsDataSource
            }
        }
    },
    computed: {
        agColumns() {
            const self = this
            return [
                {
                    headerName: this.$t('results.list.column_student_name'),
                    field: 'student.name',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('results.list.column_student_email'),
                    field: 'student.email',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('results.list.column_exam_name'),
                    field: 'exam.label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('results.list.column_total_score'),
                    field: 'exam.score',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('results.list.column_student_score'),
                    field: 'score',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('results.list.column_status'),
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        return params.data.passed ? self.$t('results.list.column_passed') : self.$t('results.list.column_failed')
                    }
                },
                {
                    headerName: this.$t('results.list.column_actions'),
                    field: 'name',
                    minWidth: 170,
                    sortable: true
                }
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
