<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('lessons.title') }}</h2>
            </div>

            <vx-tooltip v-if="activeUserInfo.upload_lessons || $hasRole('admin')" position="right"
                        :text="$t('lessons.create_lesson_tooltip')"
                        class="ml-auto md:block hidden cursor-pointer">
                <vs-button size="large" icon="icon-settings" icon-pack="feather" :to="{ name: 'lessons.create' }"/>
            </vx-tooltip>
        </div>

        <vx-card :title="$t('lessons.all_lessons')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('lessons.filter.tooltip')"
                            class="ml-auto md:block hidden cursor-pointer">
                    <vs-button icon="icon-settings" icon-pack="feather" @click="showFilters"/>
                </vx-tooltip>
            </template>
            <div v-if="filters" class="mb-5">
                <div class="vx-row">
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('lessons.filter.name') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <vs-input class="w-full" v-model="agFilters.name"/>
                        </div>
                    </div>
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('lessons.filter.course') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <v-select
                                class="w-full"
                                label="name"
                                :reduce="course => course.id"
                                :options="getCourses"
                                v-model="agFilters.course"></v-select>
                        </div>
                    </div>
                    <div class="vx-col w-1/3">
                        <vs-button class="mr-3 mt-5" @click="applyFilters">{{ $t('lessons.filter.title') }}</vs-button>
                    </div>
                </div>
            </div>
            <ag-table
                ref="allLessonsTable"
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
                course: null
            },
            agOptions: {
                dataSource: LessonsDataSource
            }
        }
    },
    mounted() {
        this.agFilters.course = this.$route.query.course_id || null

        this.loadCourses()
    },
    computed: {
        ...mapGetters({
            'getCourses': 'Courses/getCourses'
        }),
        activeUserInfo() {
            return this.$store.getters['Authentication/getProfile']
        },
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
                },
                {
                    headerName: this.$t('الممتحنين'),
                    field: 'course.name',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('الناجحين'),
                    field: 'course.name',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('lessons.list.column_actions'),
                    minWidth: 330,
                    cellRendererFramework: 'tableActionColumnCell'
                },
            ]
        },
    },
    methods: {
        ...mapActions({
            'loadCourses': 'Courses/loadCourses'
        }),
        showFilters() {
            this.filters = !this.filters
        },
        applyFilters() {
            this.$refs['allLessonsTable'].applyFilters()
        }
    }
}
</script>

<style lang="scss" scoped></style>
