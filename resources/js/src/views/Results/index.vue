<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('results.title') }}</h2>
            </div>
        </div>

        <vx-card :title="$t('results.all_results')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('results.filter.tooltip')"
                            class="ml-auto md:block hidden cursor-pointer">
                    <vs-button icon="icon-settings" icon-pack="feather" @click="showFilters"/>
                </vx-tooltip>
            </template>
            <div v-if="filters" class="mb-5">
                <div class="vx-row">
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('results.filter.name_email') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <vs-input class="w-full" v-model="agFilters.search"/>
                        </div>
                    </div>
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('results.filter.level') }}</span>
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
                            <span>{{ $t('results.filter.semester') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <v-select
                                class="w-full"
                                label="label"
                                :reduce="semester => semester.id"
                                :options="getSemesters"
                                v-model="agFilters.semester"></v-select>
                        </div>
                    </div>
                    <div class="vx-col w-1/2">
                        <vs-button class="mr-3 mt-5" @click="applyFilters">
                            {{ $t('results.filter.title') }}
                        </vs-button>
                    </div>
                </div>
            </div>
            <ag-table
                ref="allResultsTable"
                :filters="agFilters"
                :columns="agColumns"
                :options="agOptions"
            ></ag-table>
        </vx-card>

        <vs-prompt
            :title="$t('results.edit_result')"
            @cancel="hidePopup"
            @accept="saveResult"
            @close="hidePopup"
            :active.sync="showEditResultPopup">
            <div>
                <vs-input class="w-full" type="number" v-model="extraResult"></vs-input>
            </div>
        </vs-prompt>
    </div>
</template>

<script>
import AgTable from "../../components/AgTable";
import ResultsDataSource from "../../datasources/ResultsDataSource";
import {mapActions, mapGetters} from "vuex";
import tableActionColumnCell from './components/TableActionColumnCell'
import safwaAxios from "../../axios";

export default {
    components: {
        AgTable,
        tableActionColumnCell
    },
    data() {
        return {
            filters: false,
            showEditResultPopup: false,
            extraResult: 0,
            resultId: null,
            agFilters: {
                search: null,
                level: null,
                semester: null,
                exam_id: null
            },
            agOptions: {
                dataSource: ResultsDataSource,
                context: this
            }
        }
    },
    mounted() {
        this.agFilters.exam_id = this.$route.query.exam_id || null
        this.loadLevels()
        this.loadSemesters()
    },
    computed: {
        ...mapGetters({
            'getSemesters': 'Semesters/getSemesters'
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
            return [
                {
                    headerName: this.$t('results.list.column_student_name'),
                    field: 'student.name',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('results.list.column_student_email'),
                    field: 'student.email',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('results.list.column_exam_name'),
                    field: 'exam.label',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('results.list.column_total_score'),
                    field: 'exam.score',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('results.list.column_student_score'),
                    field: 'score',
                    minWidth: 170,
                    valueGetter(params) {
                        if (!params.data) return
                        return params.data.score + params.data.extra
                    }
                },
                {
                    headerName: this.$t('results.list.column_student_extra_score'),
                    field: 'extra',
                    minWidth: 170
                },
                {
                    headerName: this.$t('results.list.column_status'),
                    minWidth: 170,
                    valueGetter(params) {
                        if (!params.data) return
                        return params.data.passed ? self.$t('results.list.column_passed') : self.$t('results.list.column_failed')
                    }
                },
                {
                    headerName: this.$t('results.list.column_actions'),
                    minWidth: 170,
                    cellRendererFramework: 'tableActionColumnCell'
                }
            ]
        }
    },
    methods: {
        ...mapActions({
            'loadLevels': 'Levels/loadLevels',
            'loadSemesters': 'Semesters/loadSemesters'
        }),
        showFilters() {
            this.filters = !this.filters
        },
        applyFilters() {
            this.$refs['allResultsTable'].applyFilters()
        },
        showEditResult(resultId) {
            this.extraResult = 0
            this.resultId = resultId
            this.showEditResultPopup = true
        },
        hidePopup() {
            this.showEditResultPopup = false
            this.extraResult = 0
            this.resultId = null
        },
        async saveResult() {
            if (!this.resultId) return

            await safwaAxios.post(`results/extra/${this.resultId}`, {
                extra: this.extraResult || 0
            })

            this.hidePopup()
            this.$refs['allResultsTable'].refreshGrid()
        }
    }
}
</script>

<style lang="scss" scoped></style>
