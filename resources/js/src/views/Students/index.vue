<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('students.title') }}</h2>
            </div>

            <vx-tooltip position="right" :text="$t('students.create_student_tooltip')"
                        class="ml-auto md:block hidden cursor-pointer">
                <vs-button size="large" icon="icon-edit" icon-pack="feather" :to="{ name: 'students.create' }"/>
            </vx-tooltip>
        </div>

        <vx-card :title="$t('students.all_students')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('students.filter.tooltip')"
                            class="ml-auto md:block hidden cursor-pointer">
                    <vs-button icon="icon-filter" icon-pack="feather" @click="showFilters"/>
                </vx-tooltip>
            </template>
            <div v-if="filters" class="mb-5">
                <div class="vx-row">
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('students.filter.name_email') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <vs-input class="w-full" v-model="agFilters.search"/>
                        </div>
                    </div>
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('students.filter.level') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <v-select
                                class="w-full"
                                label="name"
                                :reduce="level => level.id"
                                :options="getLevels"
                                v-model="agFilters.level"></v-select>
                        </div>
                    </div>
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('students.filter.status') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <v-select class="w-full" label="name" :options="getStatus"
                                      v-model="agFilters.status"></v-select>

                        </div>
                    </div>
                    <div class="vx-col w-full">
                        <vs-button class="mr-3 mt-5" @click="applyFilters">{{ $t('students.filter.title') }}</vs-button>
                    </div>
                </div>
            </div>
            <ag-table
                ref="allStudentsTable"
                :filters="agFilters"
                :columns="agColumns"
                :options="agOptions"
            ></ag-table>
        </vx-card>
    </div>
</template>

<script>
import AgTable from "../../components/AgTable";
import StudentsDataSource from "../../datasources/StudentsDataSource";
import tableActionColumnCell from './components/TableActionColumnCell'
import tableNameColumnCell from './components/TableNameColumnCell'
import tableNationalityColumnCell from './components/TableNationalityColumnCell'
import {mapActions} from "vuex";

export default {
    components: {
        AgTable,
        tableActionColumnCell,
        tableNameColumnCell,
        tableNationalityColumnCell
    },
    data() {
        return {
            filters: false,
            agFilters: {
                search: null,
                level: null,
                status: null,
            },
            agOptions: {
                dataSource: StudentsDataSource
            }
        }
    },
    mounted() {
        this.loadLevels()
    },
    computed: {
        agColumns() {
            const self = this
            return [
                {
                    headerName: this.$t('students.list.column_name'),
                    field: 'name',
                    minWidth: 170,
                    sortable: true,
                    cellRendererFramework: 'tableNameColumnCell'
                },
                {
                    headerName: this.$t('students.list.column_email'),
                    field: 'email',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('students.list.column_nationality'),
                    field: 'nationality',
                    minWidth: 170,
                    sortable: true,
                    cellRendererFramework: 'tableNationalityColumnCell'
                },
                {
                    headerName: this.$t('students.list.column_level'),
                    field: 'level_id',
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        if (!params.data) return
                        return self.$t(`levels.level${params.data.level_id || 1}`)
                    }
                },
                {
                    headerName: this.$t('students.list.column_status'),
                    field: 'status',
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        if (!params.data) return
                        return self.$t(`status.${params.data.status || 1}`)
                    }
                },
                {
                    headerName: this.$t('students.list.column_actions'),
                    minWidth: 230,
                    cellRendererParams: {
                        routeName: 'students.edit',
                    },
                    cellRendererFramework: 'tableActionColumnCell'
                },
            ]
        },
        getLevels() {
            const levels = this.$store.getters['Levels/getLevels']

            return levels.map(level => {
                return {
                    id: level.id,
                    name: this.$t(`levels.${level.name}`)
                }
            })
        },
        getStatus() {
            const allStatus = [1, 2, 3]

            return allStatus.map(status => {
                return {
                    id: status,
                    name: this.$t(`status.${status}`)
                }
            })
        }
    },
    methods: {
        ...mapActions({
            loadLevels: 'Levels/loadLevels',
        }),
        showFilters() {
            this.filters = !this.filters
        },
        applyFilters() {
            this.$refs['allStudentsTable'].applyFilters()
        }
    }
}
</script>

<style lang="scss" scoped></style>
