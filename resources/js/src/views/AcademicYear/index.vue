<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('academic_years.title') }}</h2>
            </div>

            <vx-tooltip position="right" :text="$t('academic_years.create_year_tooltip')"
                        class="ml-auto md:block hidden cursor-pointer">
                <vs-button size="large" icon="icon-settings" icon-pack="feather" :to="{ name: 'academic-year.create' }"/>
            </vx-tooltip>
        </div>

        <vx-card :title="$t('academic_years.all_years')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('academic_years.filter_tooltip')"
                            class="ml-auto md:block hidden cursor-pointer">
                    <vs-button icon="icon-settings" icon-pack="feather" @click="showFilters"/>
                </vx-tooltip>
            </template>
            <div v-if="filters" class="mb-5">
                <div class="vx-row">
                    <div class="vx-col w-1/2">
                        <vs-input class="w-full" :label-placeholder="$t('academic_years.year_name')" v-model="agFilters.name"/>
                    </div>
                    <div class="vx-col w-1/2">
                        <vs-button class="mr-3 mt-5">{{ $t('academic_years.filter') }}</vs-button>
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
import AcademicYearDataSource from "../../datasources/AcademicYearDataSource";
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
                dataSource: AcademicYearDataSource
            }
        }
    },
    computed: {
        // return self.$moment(params.data.created_at).format('iYYYY-iM-iD')
        agColumns() {
            const self = this
            const dateFormat = 'D-M-YYYY' // 'YYYY-M-D'
            const hijriDataFormat = 'iD-iM-iYYYY' // 'iYYYY-iM-iD'
            return [
                {
                    headerName: this.$t('academic_years.list.column_name'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('academic_years.list.column_first_semester_start'),
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        return `${self.$moment(params.data.semesters[0].start).format(dateFormat)} / ${self.$moment(params.data.semesters[0].start).format(hijriDataFormat)}`
                    }
                },
                {
                    headerName: this.$t('academic_years.list.column_first_semester_end'),
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        return `${self.$moment(params.data.semesters[0].end).format(dateFormat)} / ${self.$moment(params.data.semesters[0].end).format(hijriDataFormat)}`
                    }
                },
                {
                    headerName: this.$t('academic_years.list.column_second_semester_start'),
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        return `${self.$moment(params.data.semesters[1].start).format(dateFormat)} / ${self.$moment(params.data.semesters[1].start).format(hijriDataFormat)}`
                    }
                },
                {
                    headerName: this.$t('academic_years.list.column_second_semester_end'),
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        return `${self.$moment(params.data.semesters[1].end).format(dateFormat)} / ${self.$moment(params.data.semesters[1].end).format(hijriDataFormat)}`
                    }
                },
                {
                    headerName: this.$t('academic_years.list.column_actions'),
                    minWidth: 170,
                    sortable: true,
                    cellRendererParams: {
                        routeName: 'academic-year.edit',
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
