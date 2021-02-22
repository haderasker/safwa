<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('courses.title') }}</h2>
            </div>

            <vx-tooltip v-if="$hasRole('admin')" position="right" :text="$t('courses.create_course_tooltip')"
                        class="ml-auto md:block hidden cursor-pointer">
                <vs-button size="large" icon="icon-settings" icon-pack="feather" :to="{ name: 'courses.create' }"/>
            </vx-tooltip>
        </div>

        <vx-card :title="$t('courses.all_courses')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('courses.filter_tooltip')"
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
                        <vs-button class="mr-3 mt-5">{{ $t('courses.filter') }}</vs-button>
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
import CoursesDataSource from "../../datasources/CoursesDataSource";
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
                dataSource: CoursesDataSource
            }
        }
    },
    computed: {
        agColumns() {
            const self = this
            const columns = [
                {
                    headerName: this.$t('courses.list.column_name'),
                    field: 'name',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('courses.list.column_lessons_number'),
                    field: 'lessons_count',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('courses.list.column_level'),
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        return window._.get(params, 'data.level_names', []).map(level_name => {
                            return self.$t('levels.' + level_name)
                        }).join(', ')
                    }
                },
                {
                    headerName: this.$t('courses.list.column_students_success_number'),
                    // field: 'name',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('courses.list.column_students_failed_number'),
                    // field: 'name',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('courses.list.column_students_number'),
                    // field: 'name',
                    minWidth: 170,
                    sortable: true
                },
                {
                    headerName: this.$t('courses.list.column_actions'),
                    minWidth: 170,
                    sortable: true,
                    cellRendererParams: {
                        routeName: this.$hasRole('admin') ? 'courses.edit' : null,
                        courseRouteName: this.$hasRole('teacher') ? 'teacher-course.profile' : null,
                        lessonRouteName: this.$hasRole('teacher') ? 'lessons.list' : null,
                    },
                    cellRendererFramework: 'tableActionColumnCell'
                }
            ]

            if (this.$hasRole('admin')) {
                // push element at index 1 (second item)
                columns.splice(1, 0, {
                    headerName: this.$t('courses.list.column_teacher'),
                    minWidth: 170,
                    sortable: true,
                    valueGetter(params) {
                        return window._.get(params, 'data.teacher.name')
                    }
                });
            }

            return columns
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
