<template>
    <div>
        <data-view-sidebar v-model="question" @close="onSidebarClosed" :open="sidebarOpened"/>

        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $route.params.id ? $t('exams.edit_exam_title') + exam.label : $t('exams.create_exam_title') }}</h2>
            </div>
        </div>

        <vx-card>
            <form-wizard
                :startIndex="0"
                color="rgba(var(--vs-primary), 1)"
                errorColor="rgba(var(--vs-danger), 1)"
                :title="null"
                :subtitle="null"
                @on-complete="createExam"
                @on-change="validateStep"
                :finishButtonText="$route.params.id ? $t('exams.edit') : $t('exams.create')"
                :nextButtonText="$t('exams.next')"
                :backButtonText="$t('exams.back')">

                <tab-content
                    :lazy="true"
                    :title="$t('exams.step1.title')"
                    class="mb-5">

                    <vs-divider/>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.label') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input class="w-full" v-model="exam.label"/>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.select_subject') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="getCourses" v-model="exam.testable"></v-select>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.select_level') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="getLevels" v-model="exam.level"></v-select>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_type') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="typesOptions" v-model="exam.type"></v-select>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_start_date') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <datepicker :format="dateFormat" placeholder="Select Date"
                                        v-model="exam.published_at"></datepicker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_end_date') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <datepicker :format="dateFormat" placeholder="Select Date"
                                        v-model="exam.ended_at"></datepicker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_duration') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input type="number" class="w-full" v-model="exam.duration"/>
                        </div>
                    </div>
                </tab-content>

                <tab-content
                    :lazy="true"
                    :title="$t('exams.step2.title')"
                    class="mb-5">

                    <vs-divider/>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-button @click="openSidebar" color="primary" type="filled" size="small">
                                {{ $t('exams.add_q') }}
                            </vs-button>
                        </div>
                    </div>

                    <div class="vx-row mb-6">
                        <vs-list>
                            <vs-list-header :title="$t('exams.q_list')" color="primary"></vs-list-header>

                            <draggable :list="exam.questions">
                                <transition-group>
                                    <vs-list-item
                                        class="list-item"
                                        v-for="(listItem, index) in exam.questions"
                                        :key="`listItem-${index}`"
                                        :title="listItem.label"
                                        :subtitle="listItem.score.toString()">

                                        <vs-button color="primary" type="flat" @click="editQuestion(index, listItem)">
                                            {{ $t('exams.edit_q') }}
                                        </vs-button>
                                        <vs-button color="primary" type="flat" @click="removeQuestion(index)">
                                            {{ $t('exams.remove_q') }}
                                        </vs-button>
                                    </vs-list-item>
                                </transition-group>
                            </draggable>

                        </vs-list>
                    </div>
                </tab-content>
            </form-wizard>
        </vx-card>
    </div>
</template>

<script>
import DataViewSidebar from "./DataViewSidebar";
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Datepicker from 'vuejs-datepicker'
import draggable from 'vuedraggable'
import safwaAxios from "../../../axios";
import {mapGetters, mapActions} from 'vuex'

export default {
    props: ['exam'],
    components: {
        FormWizard,
        TabContent,
        Datepicker,
        draggable,
        DataViewSidebar
    },
    data() {
        return {
            sidebarOpened: false,
            question: {
                index: -1,
                label: '',
                score: 0,
                correctAnswer: -1,
                answers: [
                    {
                        label: '',
                        is_correct: false
                    },
                    {
                        label: '',
                        is_correct: false
                    }
                ]
            },
            dateFormat: 'yyyy-MM-dd'
        }
    },
    mounted() {
        this.loadLevels()
        this.loadCourses()
    },
    computed: {
        ...mapGetters({
            getCourses: 'Courses/getCourses'
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
        typesOptions() {
            return [
                {
                    id: 'default',
                    name: this.$t('exams.types.default')
                },
                {
                    id: 'fail',
                    name: this.$t('exams.types.fail')
                },
            ]
        }
    },
    methods: {
        ...mapActions({
            loadLevels: 'Levels/loadLevels',
            loadCourses: 'Courses/loadCourses'
        }),
        openSidebar() {
            this.sidebarOpened = true
        },
        resetQuestion() {
            this.question = {
                index: -1,
                label: '',
                score: 0,
                correctAnswer: -1,
                answers: [
                    {
                        label: '',
                        is_correct: false
                    },
                    {
                        label: '',
                        is_correct: false
                    }
                ]
            }
        },
        onSidebarClosed(saved) {
            if (saved) {
                if (this.question.index > -1) {
                    this.exam.questions[this.question.index] = this.question
                } else {
                    this.exam.questions.push(this.question)
                }
            }
            this.resetQuestion()
            this.sidebarOpened = false
        },
        async createExam() {
            const published_at = this.$moment(this.exam.published_at)
            published_at.locale('en')

            const ended_at = this.$moment(this.exam.ended_at)
            ended_at.locale('en')

            const exam = {
                published_at: published_at.format('YYYY-MM-DD'),
                ended_at: ended_at.format('YYYY-MM-DD'),
                testable_type: 'course',
                testable_id: window._.get(this, 'exam.testable.id', null),
                duration: this.exam.duration,
                label: this.exam.label,
                level_id: window._.get(this, 'exam.level.id', null),
                type: window._.get(this, 'exam.type.id', null),
                questions: this.exam.questions.map((q, index) => ({
                    score: q.score,
                    label: q.label,
                    answers: q.answers,
                    order: index + 1,
                    id: q.id || null
                }))
            }

            if (this.$route.params.id) {
                await safwaAxios.put(`exams/${this.$route.params.id}`, exam);
            } else {
                await safwaAxios.post('exams/', exam)
                this.$router.push({name: 'exams.list'});
            }
        },
        validateStep(prevIndex, nextIndex) {
            // validate form
        },
        editQuestion(index, data) {
            const correctAnswer = data.answers.findIndex(answer => !!answer.is_correct)

            this.question = {
                ...data,
                correctAnswer,
                index
            }

            this.openSidebar()
        },
        removeQuestion(index) {
            this.exam.questions.splice(index, 1)
        }
    }
}
</script>

<style lang="scss" scoped></style>
