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
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('courses.filter.name') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <vs-input class="w-full" v-model="agFilters.name"/>
                        </div>
                    </div>
                    <div class="vx-col w-full md:w-1/3 mb-5" v-if="$hasRole('admin')">
                        <div class="vx-col w-full">
                            <span>{{ $t('courses.filter.teacher') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <v-select
                                class="w-full"
                                label="name"
                                :reduce="teacher => teacher.id"
                                :options="getTeachers"
                                v-model="agFilters.teacher"></v-select>
                        </div>
                    </div>
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('courses.filter.level') }}</span>
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
                    <div class="vx-col w-1/3">
                        <vs-button class="mr-3 mt-5" @click="applyFilters">{{ $t('courses.filter.title') }}</vs-button>
                    </div>
                </div>
            </div>
            <ag-table
                ref="allCoursesTable"
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
import tableActionColumnCell from './components/TableActionColumnCell'
import {mapActions, mapGetters} from "vuex";

export default {
    components: {
        AgTable,
        tableActionColumnCell
    },
    data() {
        return {
            filters: false,
            agFilters: {
                name: null,
                teacher: null,
                level: null
            },
            agOptions: {
                dataSource: CoursesDataSource
            }
        }
    },
    mounted() {
        this.loadTeachers()
        this.loadLevels()
    },
    computed: {
        ...mapGetters({
            'getTeachers': 'Teachers/getTeachers',
        }),
        getLevels() {
            const levels = this.$store.getters['Levels/getLevels']

            return levels.map(level => {
                return {
                    id: level.id,
                    name: this.$t(`levels.${level.name}`)
                }
            })
        },
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
                },
                {
                    headerName: this.$t('courses.list.column_level'),
                    minWidth: 170,
                    valueGetter(params) {
                        return window._.get(params, 'data.level_names', []).map(level_name => {
                            return self.$t('levels.' + level_name)
                        }).join(', ')
                    }
                },
                {
                    headerName: this.$t('courses.list.column_students_success_number'),
                    field: 'passed_students',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('courses.list.column_students_failed_number'),
                    field: 'failed_students',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('courses.list.column_students_number'),
                    field: 'students_count',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('courses.list.column_actions'),
                    minWidth: 220,
                    // cellRendererParams: {
                    //     routeName: this.$hasRole('admin') ? 'courses.edit' : null,
                    //     courseRouteName: this.$hasRole('teacher') ? 'teacher-course.profile' : null,
                    //     lessonRouteName: this.$hasRole('teacher') ? 'lessons.list' : null,
                    // },
                    cellRendererFramework: 'tableActionColumnCell'
                }
            ]

            if (this.$hasRole('admin')) {
                // push element at index 1 (second item)
                columns.splice(1, 0, {
                    headerName: this.$t('courses.list.column_teacher'),
                    minWidth: 170,
                    valueGetter(params) {
                        return window._.get(params, 'data.teacher.name')
                    }
                });
            }

            return columns
        }
    },
    methods: {
        ...mapActions({
            'loadTeachers': 'Teachers/loadTeachers',
            'loadLevels': 'Levels/loadLevels'
        }),
        showFilters() {
            this.filters = !this.filters
        },
        applyFilters() {
            this.$refs['allCoursesTable'].applyFilters()
        }
    }
}
</script>

<style lang="scss" scoped></style>
