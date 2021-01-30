<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('students.title') }}</h2>
            </div>

            <vx-tooltip position="right" :text="$t('students.create_student_tooltip')"
                        class="ml-auto md:block hidden cursor-pointer">
                <vs-button size="large" icon="icon-settings" icon-pack="feather" :to="{ name: 'students.create' }"/>
            </vx-tooltip>
        </div>

        <vx-card :title="$t('students.all_students')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('students.filter_tooltip')"
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
                        <vs-button class="mr-3 mt-5">{{ $t('students.filter') }}</vs-button>
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
import StudentsDataSource from "../../datasources/StudentsDataSource";
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
                dataSource: StudentsDataSource
            }
        }
    },
    computed: {
        agColumns() {
            return [
                {
                    headerName: this.$t('students.list.column_name'),
                    field: 'name',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('students.list.column_email'),
                    field: 'email',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('students.list.column_nationality'),
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('students.list.column_level'),
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('students.list.column_status'),
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('students.list.column_actions'),
                    minWidth: 170,
                    sortable: false,
                    cellRendererParams: {
                        routeName: 'students.edit',
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
