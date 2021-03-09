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
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('exams.filter.name') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <vs-input class="w-full" v-model="agFilters.name"/>
                        </div>
                    </div>
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('exams.filter.level') }}</span>
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
                    <div class="vx-col w-1/2">
                        <vs-button class="mr-3 mt-5" @click="applyFilters">{{ $t('exams.filter.title') }}</vs-button>
                    </div>
                </div>
            </div>
            <ag-table
                ref="allExamsTable"
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
import tableActionColumnCell from './components/TableActionColumnCell'
import tableNameColumnCell from './components/TableNameColumnCell'
import {mapActions} from "vuex";

export default {
    components: {
        AgTable,
        tableActionColumnCell,
        tableNameColumnCell
    },
    data() {
        return {
            filters: false,
            agFilters: {
                name: null,
                level: null
            },
            agOptions: {
                dataSource: ExamsDataSource
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
                    headerName: this.$t('exams.exam_name'),
                    field: 'label',
                    minWidth: 170,
                    sortable: true,
                    cellRendererFramework: 'tableNameColumnCell'
                },
                {
                    headerName: this.$t('exams.exam_level'),
                    field: 'level_id',
                    minWidth: 170,
                    valueGetter(params) {
                        if (!params.data) return
                        return self.$t(`levels.level${params.data.level_id || 1}`)
                    }
                },
                {
                    headerName: this.$t('exams.q_number'),
                    field: 'questions_count',
                    minWidth: 170
                },
                {
                    headerName: this.$t('exams.success_score'),
                    field: 'score',
                    minWidth: 170,
                    valueGetter(params) {
                        if (!params.data) return
                        return params.data.score / 2
                    }
                },
                {
                    headerName: this.$t('exams.total_students'),
                    field: 'student_exam_count',
                    minWidth: 170
                },
                {
                    headerName: this.$t('exams.graduation_students'),
                    field: 'graduation_students',
                    minWidth: 170
                },
                {
                    headerName: this.$t('exams.actions'),
                    minWidth: 220,
                    cellRendererFramework: 'tableActionColumnCell'
                }
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
    },
    methods: {
        ...mapActions({
            loadLevels: 'Levels/loadLevels',
        }),
        showFilters() {
            this.filters = !this.filters
        },
        applyFilters() {
            this.$refs['allExamsTable'].applyFilters()
        }
    }
}
</script>

<style lang="scss" scoped></style>
