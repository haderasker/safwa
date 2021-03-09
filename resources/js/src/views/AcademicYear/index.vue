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
                },
                {
                    headerName: this.$t('academic_years.list.column_first_semester_start'),
                    minWidth: 170,
                    valueGetter(params) {
                        return `${self.$moment(params.data.semesters[0].start).format(dateFormat)} / ${self.$moment(params.data.semesters[0].start).format(hijriDataFormat)}`
                    }
                },
                {
                    headerName: this.$t('academic_years.list.column_first_semester_end'),
                    minWidth: 170,
                    valueGetter(params) {
                        return `${self.$moment(params.data.semesters[0].end).format(dateFormat)} / ${self.$moment(params.data.semesters[0].end).format(hijriDataFormat)}`
                    }
                },
                {
                    headerName: this.$t('academic_years.list.column_second_semester_start'),
                    minWidth: 170,
                    valueGetter(params) {
                        return `${self.$moment(params.data.semesters[1].start).format(dateFormat)} / ${self.$moment(params.data.semesters[1].start).format(hijriDataFormat)}`
                    }
                },
                {
                    headerName: this.$t('academic_years.list.column_second_semester_end'),
                    minWidth: 170,
                    valueGetter(params) {
                        return `${self.$moment(params.data.semesters[1].end).format(dateFormat)} / ${self.$moment(params.data.semesters[1].end).format(hijriDataFormat)}`
                    }
                },
                {
                    headerName: this.$t('academic_years.list.column_actions'),
                    minWidth: 170,
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
