<template>
    <div>
        <data-view-sidebar v-model="question" @close="onSidebarClosed" :open="sidebarOpened"/>

        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $route.params.id ? $t('lessons.edit_title') + lesson.label : $t('lessons.create_title') }}</h2>
            </div>
        </div>

        <vx-card>
            <form-wizard
                :startIndex="0"
                color="rgba(var(--vs-primary), 1)"
                errorColor="rgba(var(--vs-danger), 1)"
                :title="null"
                :subtitle="null"
                @on-complete="createLesson"
                @on-change="validateStep"
                :finishButtonText="$t('lessons.wizard.submit')"
                :nextButtonText="$t('lessons.wizard.next')"
                :backButtonText="$t('lessons.wizard.back')">

                <tab-content
                    :lazy="true"
                    :title="$t('lessons.step1.title')"
                    class="mb-5">

                    <vs-divider/>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.courses') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="getCourses" v-model="lesson.course"></v-select>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.lesson_name') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input class="w-full" :placeholder="$t('lessons.step1.lesson_name_placeholder')"
                                      v-model="lesson.label"/>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.publish_date_time') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <flat-picker class="w-full" :config="configDateTimePicker" v-model="lesson.published_at"
                                         :placeholder="$t('lessons.step1.publish_date_time')"/>
                        </div>
                    </div>

                    <h4 class="mb-5">
                        {{ $t('lessons.step1.content') }}
                    </h4>

                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.youtube') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input class="w-full" :placeholder="$t('lessons.step1.youtube')"
                                      v-model="lesson.youtube"/>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.soundcloud') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input class="w-full" :placeholder="$t('lessons.step1.soundcloud')"
                                      v-model="lesson.soundcloud"/>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.pdf') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input class="w-full" :placeholder="$t('lessons.step1.pdf')"
                                      v-model="lesson.pdf"/>
                        </div>
                    </div>
                </tab-content>

                <tab-content
                    :lazy="true"
                    :title="$t('lessons.step2.title')"
                    class="mb-5">

                    <vs-divider/>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-button @click="openSidebar" color="primary" type="filled" size="small">
                                {{ $t('lessons.add_q') }}
                            </vs-button>
                        </div>
                    </div>

                    <div class="vx-row mb-6">
                        <vs-list>
                            <vs-list-header :title="$t('lessons.q_list')" color="primary"></vs-list-header>

                            <draggable :list="lesson.quiz.questions">
                                <transition-group>
                                    <vs-list-item
                                        class="list-item"
                                        v-for="(listItem, index) in lesson.quiz.questions"
                                        :key="`listItem-${index}`"
                                        :title="listItem.label">

                                        <vs-button color="primary" type="flat" @click="editQuestion(index, listItem)">
                                            {{ $t('lessons.edit_q') }}
                                        </vs-button>
                                        <vs-button color="primary" type="flat" @click="removeQuestion(index)">
                                            {{ $t('lessons.remove_q') }}
                                        </vs-button>
                                    </vs-list-item>
                                </transition-group>
                            </draggable>
                        </vs-list>
                    </div>
                </tab-content>

                <tab-content
                    v-if="$route.params.id"
                    :lazy="true"
                    :title="$t('lessons.step3.title')"
                    class="mb-5">

                    <vs-divider/>

                    <comments-section :commentableId="$route.params.id"
                                      :commentableType="commentableType"></comments-section>

                </tab-content>
            </form-wizard>
        </vx-card>
    </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import flatPicker from 'vue-flatpickr-component';
import draggable from 'vuedraggable'
import DataViewSidebar from "./DataViewSidebar";
import CommentsSection from '../../../components/CommentsSection'
import {mapActions, mapGetters} from 'vuex'
import safwaAxios from "../../../axios";

import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import 'flatpickr/dist/flatpickr.css';

export default {
    props: ['lesson'],
    components: {
        FormWizard,
        TabContent,
        flatPicker,
        draggable,
        DataViewSidebar,
        CommentsSection
    },
    data() {
        return {
            commentableType: 'lesson',
            question: {
                index: -1,
                label: '',
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
            sidebarOpened: false,
            configDateTimePicker: {
                enableTime: true,
                dateFormat: 'Y-m-d H:i'
            }
        }
    },
    watch: {
        question(val) {
            // console.log({question: val})
        },
        'lesson.quiz.questions'(val) {
            // console.log({list: val})
        }
    },
    mounted() {
        this.loadCourses()
    },
    computed: {
        ...mapGetters({
            getCourses: 'Courses/getCourses'
        })
    },
    methods: {
        ...mapActions({
            loadCourses: 'Courses/loadCourses'
        }),
        async createLesson() {
            const lesson = {
                ...this.lesson,
                course_id: window._.get(this, 'lesson.course.id', null),
                questions: this.lesson.quiz.questions.map((q, index) => ({
                    score: 10,
                    label: q.label,
                    answers: q.answers,
                    order: index + 1,
                    id: q.id || null
                }))
            }

            delete lesson.course

            if (this.$route.params.id) {
                await safwaAxios.put(`lessons/${this.$route.params.id}`, lesson);
            } else {
                await safwaAxios.post('lessons', lesson);
                this.$router.push({name: 'lessons.list'}).catch();
            }
        },
        validateStep() {
        },
        openSidebar() {
            this.sidebarOpened = true
        },
        resetQuestion() {
            this.question = {
                index: -1,
                label: '',
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
                const q = JSON.parse(JSON.stringify(this.question))
                if (this.question.index > -1) {
                    this.lesson.quiz.questions[this.question.index] = q
                } else {
                    this.lesson.quiz.questions.push(q)
                }
            }
            this.resetQuestion()
            this.sidebarOpened = false
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
            this.lesson.quiz.questions.splice(index, 1)
        }
    }
}
</script>

<style lang="scss" scoped></style>
