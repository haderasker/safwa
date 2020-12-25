<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('exams.title') }}</h2>
            </div>

            <vx-tooltip position="right" :text="$t('exams.create_exam_tooltip')"
                        class="ml-auto md:block hidden cursor-pointer">
                <vs-button size="large" icon="icon-settings" icon-pack="feather" :to="{ name: 'exams.create' }"/>
            </vx-tooltip>
        </div>

        <vx-card :title="$t('exams.all_exams')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('exams.filter_tooltip')"
                            class="ml-auto md:block hidden cursor-pointer">
                    <vs-button icon="icon-settings" icon-pack="feather" @click="showFilters"/>
                </vx-tooltip>
            </template>
            <div v-if="filters" class="mb-5">
                <div class="vx-row">
                    <div class="vx-col w-1/2">
                        <vs-input class="w-full" :label-placeholder="$t('exams.exam_name')" v-model="agFilters.name"/>
                    </div>
                    <div class="vx-col w-1/2">
                        <vs-button class="mr-3 mt-5">{{ $t('exams.filter') }}</vs-button>
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
import ExamsDataSource from "../../datasources/ExamsDataSource";
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
                name: ''
            },
            agOptions: {
                dataSource: ExamsDataSource
            }
        }
    },
    computed: {
        agColumns() {
            return [
                {
                    headerName: this.$t('exams.exam_name'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('exams.q_number'),
                    field: 'questions_count',
                    minWidth: 170
                },
                {
                    headerName: this.$t('exams.success_score'),
                    field: 'name',
                    minWidth: 170
                },
                {
                    headerName: this.$t('exams.total_students'),
                    field: 'name',
                    minWidth: 170
                },
                {
                    headerName: this.$t('exams.graduation_students'),
                    field: 'name',
                    minWidth: 170
                },
                {
                    headerName: this.$t('exams.actions'),
                    minWidth: 170,
                    cellRendererParams: {
                        routeName: 'exams.edit',
                        // deletableType: 'lesson',
                    },
                    cellRendererFramework: 'tableActionColumnCell'
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
