<template>
    <div>
        <data-view-sidebar v-model="question" @close="onSidebarClosed" :open="sidebarOpened"/>

        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{
                        $route.params.id ? $t('exams.edit_exam_title') + exam.label : $t('exams.create_exam_title')
                    }}</h2>
            </div>
        </div>

        <vx-card>
            <form-wizard
                :startIndex="0"
                color="rgba(var(--vs-primary), 1)"
                errorColor="rgba(var(--vs-danger), 1)"
                :title="null"
                :subtitle="null"
                @on-change="validateStep"
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
                            <vs-input class="w-full" v-model="exam.label" name="label" v-validate="'required|min:3'"/>
                            <span class="text-danger text-sm">{{ errors.first('label') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.select_subject') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="getCourses" v-model="exam.testable" name="course"
                                      v-validate="'required'"></v-select>
                            <span class="text-danger text-sm">{{ errors.first('course') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.select_level') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="getLevels" v-model="exam.level" name="level"
                                      v-validate="'required'"></v-select>
                            <span class="text-danger text-sm">{{ errors.first('level') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_type') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="typesOptions" v-model="exam.type" name="type"
                                      v-validate="'required'"></v-select>
                            <span class="text-danger text-sm">{{ errors.first('type') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_start_date') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <flat-picker class="w-full" :config="configDateTimePicker" v-model="exam.published_at"
                                         placeholder="Select Date" name="published_at" v-validate="'required'"/>
                            <span class="text-danger text-sm">{{ errors.first('published_at') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_end_date') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <flat-picker class="w-full" :config="configDateTimePicker" v-model="exam.ended_at"
                                         placeholder="Select Date" name="ended_at" v-validate="'required'"/>
                            <span class="text-danger text-sm">{{ errors.first('ended_at') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_duration') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input type="number" class="w-full" v-model="exam.duration" name="duration"
                                      v-validate="'required'"/>
                            <span class="text-danger text-sm">{{ errors.first('duration') }}</span>
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

                            <table class="question-table">
                                <thead>
                                <tr>
                                    <th>
                                        {{ $t('exams.table_title') }}
                                    </th>
                                    <th>
                                        {{ $t('exams.table_answers_number') }}
                                    </th>
                                    <th>
                                        {{ $t('exams.table_score') }}
                                    </th>
                                    <th class="table-actions">
                                        {{ $t('exams.table_actions') }}
                                    </th>
                                </tr>
                                </thead>
                                <draggable v-model="exam.questions" tag="tbody">
                                    <tr v-for="(listItem, index) in exam.questions"
                                        :key="`listItem-${index}`">
                                        <td>
                                            {{ listItem.label }}
                                        </td>
                                        <td>
                                            {{ listItem.answers.length }}
                                        </td>
                                        <td>
                                            {{ listItem.score.toString() }}
                                        </td>
                                        <td class="table-actions">
                                            <vs-button color="primary" type="filled"
                                                       @click="editQuestion(index, listItem)">
                                                {{ $t('exams.edit_q') }}
                                            </vs-button>
                                            <vs-button color="danger" type="filled"
                                                       @click="removeQuestion(index, listItem)">
                                                {{ $t('exams.remove_q') }}
                                            </vs-button>
                                        </td>
                                    </tr>
                                </draggable>
                            </table>
                        </vs-list>
                        <span v-if="questionError" class="text-danger text-sm">{{ $t('exams.questions_error') }}</span>
                    </div>
                </tab-content>

                <template slot="finish">
                    <vs-button @click="createExam" color="primary" type="filled" :disabled="!validateForm">
                        {{ $route.params.id ? $t('exams.edit') : $t('exams.create') }}
                    </vs-button>
                </template>
            </form-wizard>
        </vx-card>
    </div>
</template>

<script>
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import 'flatpickr/dist/flatpickr.css';

import flatPicker from 'vue-flatpickr-component';
import DataViewSidebar from "./DataViewSidebar";
import {FormWizard, TabContent} from 'vue-form-wizard'
import draggable from 'vuedraggable'
import safwaAxios from "../../../axios";
import {mapGetters, mapActions} from 'vuex'

export default {
    props: ['exam'],
    components: {
        FormWizard,
        TabContent,
        draggable,
        DataViewSidebar,
        flatPicker
    },
    data() {
        return {
            questionError: false,
            configDateTimePicker: {
                enableTime: true,
                dateFormat: 'Y-m-d H:i'
            },
            sidebarOpened: false,
            deletedQuestions: [],
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
            }
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
        validateForm() {
            return !this.errors.any() && this.exam.questions && this.exam.questions.length
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
            await this.$validator.validate()

            if(!this.exam.questions.length) {
                this.questionError=true
            }

            if (this.errors.any()) {
                return
            }

            const published_at = this.$moment(this.exam.published_at)
            published_at.locale('en')

            const ended_at = this.$moment(this.exam.ended_at)
            ended_at.locale('en')

            const exam = {
                published_at: published_at.format('YYYY-MM-DD HH:mm'),
                ended_at: ended_at.format('YYYY-MM-DD HH:mm'),
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
                await safwaAxios.put(`exams/${this.$route.params.id}`, {
                    exam,
                    deletedQuestions: this.deletedQuestions
                });
            } else {
                await safwaAxios.post('exams', {exam})
                this.$router.push({name: 'exams.list'}).catch();
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
        removeQuestion(index, question) {
            // if this is an old Question then grab it's id and delete it
            if (question.id) {
                this.deletedQuestions.push(question.id)
            }

            this.exam.questions.splice(index, 1)
        }
    }
}
</script>

<style lang="scss" scoped>

.question-table {
    width: 100%;

    th {
        text-align: left !important;
        font-size: 1.1em;
    }

    th, td {
        padding: 15px;
    }

    .table-actions {
        width: 200px;
    }
}

</style>
