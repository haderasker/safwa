<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('lessons.title') }}</h2>
            </div>

            <vx-tooltip position="right" :text="$t('lessons.create_lesson_tooltip')"
                        class="ml-auto md:block hidden cursor-pointer">
                <vs-button size="large" icon="icon-settings" icon-pack="feather" :to="{ name: 'lessons.create' }"/>
            </vx-tooltip>
        </div>

        <vx-card :title="$t('lessons.all_lessons')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('lessons.filter_tooltip')"
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
                        <vs-button class="mr-3 mt-5">{{ $t('lessons.filter') }}</vs-button>
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
import LessonsDataSource from "../../datasources/LessonsDataSource";
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
                dataSource: LessonsDataSource
            }
        }
    },
    computed: {
        agColumns() {
            return [
                {
                    headerName: this.$t('lessons.list.column_name'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('lessons.list.column_course'),
                    field: 'course.name',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('lessons.list.column_actions'),
                    minWidth: 170,
                    cellRendererParams: {
                        routeName: 'lessons.edit',
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
