<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('teachers.title') }}</h2>
            </div>

            <vx-tooltip position="right" :text="$t('teachers.create_teacher_tooltip')"
                        class="ml-auto md:block hidden cursor-pointer">
                <vs-button size="large" icon="icon-settings" icon-pack="feather" :to="{ name: 'teachers.create' }"/>
            </vx-tooltip>
        </div>

        <vx-card :title="$t('teachers.all_teachers')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('teachers.filter.tooltip')"
                            class="ml-auto md:block hidden cursor-pointer">
                    <vs-button icon="icon-settings" icon-pack="feather" @click="showFilters"/>
                </vx-tooltip>
            </template>
            <div v-if="filters" class="mb-5">
                <div class="vx-row">
                    <div class="vx-col w-1/2">
                        <vs-input class="w-full" :label-placeholder="$t('teachers.filter.name')" v-model="agFilters.name"/>
                    </div>
                    <div class="vx-col w-1/2">
                        <vs-button class="mr-3 mt-5" @click="applyFilters">{{ $t('teachers.filter.title') }}</vs-button>
                    </div>
                </div>
            </div>
            <ag-table
                ref="allTeachersTable"
                :filters="agFilters"
                :columns="agColumns"
                :options="agOptions"
            ></ag-table>
        </vx-card>
    </div>
</template>

<script>
import AgTable from "../../components/AgTable";
import TeachersDataSource from "../../datasources/TeachersDataSource";
import tableActionColumnCell from './components/TableActionColumnCell'
import tableCoursesCountColumnCell from './components/TableCoursesCountColumnCell'

export default {
    components: {
        AgTable,
        tableActionColumnCell,
        tableCoursesCountColumnCell
    },
    data() {
        return {
            filters: false,
            agFilters: {
                name: ''
            },
            agOptions: {
                dataSource: TeachersDataSource
            }
        }
    },
    computed: {
        agColumns() {
            const self = this
            const dateFormat = 'D-M-YYYY' // 'YYYY-M-D'
            const hijriDataFormat = 'iD-iM-iYYYY' // 'iYYYY-iM-iD'

            return [
                {
                    headerName: this.$t('teachers.list.column_name'),
                    field: 'name',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('teachers.list.column_add_lessons'),
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        if (!params.data) return
                        return params.data.upload_lessons === 1 ?
                            self.$t('teachers.allow_add_lesson') :
                            self.$t('teachers.disallow_add_lesson')
                    }
                },
                {
                    headerName: this.$t('teachers.list.column_courses_number'),
                    field: 'teacher_courses_count',
                    minWidth: 170,
                    cellRendererFramework: 'tableCoursesCountColumnCell'
                },
                {
                    headerName: this.$t('teachers.list.column_created_at'),
                    field: 'created_at',
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        if (!params.data) return
                        return `${self.$moment(params.data.created_at).format(dateFormat)} / ${self.$moment(params.data.created_at).format(hijriDataFormat)}`
                    }
                },
                {
                    headerName: this.$t('teachers.list.column_actions'),
                    minWidth: 300,
                    sortable: false,
                    cellRendererFramework: 'tableActionColumnCell'
                }
            ]
        }
    },
    methods: {
        showFilters() {
            this.filters = !this.filters
        },
        applyFilters() {
            this.$refs['allTeachersTable'].applyFilters()
        }
    }
}
</script>

<style lang="scss" scoped></style>
