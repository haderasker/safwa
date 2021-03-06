<template>
    <div>
        <data-view-sidebar v-model="question" @close="onSidebarClosed" :open="sidebarOpened"/>

        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">
                    {{ $route.params.id ? $t('lessons.edit_title') + lesson.label : $t('lessons.create_title') }}</h2>
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
                :nextButtonText="$t('lessons.wizard.next')"
                :backButtonText="$t('lessons.wizard.back')">

                <tab-content
                    :lazy="true"
                    :title="$t('lessons.step1.title')"
                    class="mb-5">

                    <vs-divider/>

                    <!-- Avatar Row -->
                    <div class="vx-row mb-6" v-if="$route.params.id">
                        <div class="vx-col w-full">
                            <div class="flex items-start flex-col sm:flex-row">
                                <img v-if="lesson.media.length" :src="$getUrl(lesson.media[0])" class="mr-8 rounded h-24 w-24"
                                     alt="avatar"/>
                                <div v-if="$hasRole('admin') || ($hasRole('teacher') && profile.upload_lessons)">
                                    <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">
                                        {{ $t('lessons.avatar') }}
                                    </p>

                                    <input type="file" class="hidden" ref="update_avatar_input" @change="updateAvatar"
                                           accept="image/*">

                                    <vs-button type="border" class="mr-4 mb-4" @click="$refs.update_avatar_input.click()">
                                        {{ $t('lessons.change_avatar') }}
                                    </vs-button>

                                    <vs-button type="border" color="danger" @click="removeAvatar()">
                                        {{ $t('lessons.remove_avatar') }}
                                    </vs-button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <vs-divider v-if="$route.params.id"></vs-divider>

                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.courses') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select :disabled="$hasRole('teacher') && !profile.upload_lessons" label="name" :options="getCourses" v-model="lesson.course" name="course" v-validate="'required'"></v-select>
                            <span class="text-danger text-sm">{{ errors.first('course') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.lesson_name') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input :disabled="$hasRole('teacher') && !profile.upload_lessons"
                                class="w-full" :placeholder="$t('lessons.step1.lesson_name_placeholder')"
                                      v-model="lesson.label" name="name" v-validate="'required'"/>
                            <span class="text-danger text-sm">{{ errors.first('name') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.publish_date_time') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <flat-picker :disabled="$hasRole('teacher') && !profile.upload_lessons"
                                class="w-full" :config="configDateTimePicker" v-model="lesson.published_at"
                                         :placeholder="$t('lessons.step1.publish_date_time')" name="published_at" v-validate="'required'"/>
                            <span class="text-danger text-sm">{{ errors.first('published_at') }}</span>
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
                            <vs-input :disabled="$hasRole('teacher') && !profile.upload_lessons"
                                class="w-full" :placeholder="$t('lessons.step1.youtube')"
                                      v-model="lesson.youtube" name="youtube" v-validate="'required'"/>
                            <span class="text-danger text-sm">{{ errors.first('youtube') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.soundcloud') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input :disabled="$hasRole('teacher') && !profile.upload_lessons"
                                class="w-full" :placeholder="$t('lessons.step1.soundcloud')"
                                      v-model="lesson.soundcloud" name="soundcloud" v-validate="'required'"/>
                            <span class="text-danger text-sm">{{ errors.first('soundcloud') }}</span>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('lessons.step1.pdf') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input :disabled="$hasRole('teacher') && !profile.upload_lessons"
                                class="w-full" :placeholder="$t('lessons.step1.pdf')"
                                      v-model="lesson.pdf" name="pdf" v-validate="'required'"/>
                            <span class="text-danger text-sm">{{ errors.first('pdf') }}</span>
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
                            <vs-button v-if="$hasRole('admin') || ($hasRole('teacher') && profile.upload_lessons)"
                                @click="openSidebar" color="primary" type="filled" size="small">
                                {{ $t('lessons.add_q') }}
                            </vs-button>
                        </div>
                    </div>

                    <div class="vx-row mb-6">
                        <vs-list>
                            <vs-list-header :title="$t('lessons.q_list')" color="primary"></vs-list-header>
                            <table class="question-table">
                                <thead>
                                <tr>
                                    <th>
                                        {{ $t('lessons.table_title') }}
                                    </th>
                                    <th>
                                        {{ $t('lessons.table_answers_number') }}
                                    </th>
                                    <th class="table-actions" v-if="$hasRole('admin') || ($hasRole('teacher') && profile.upload_lessons)">
                                        {{ $t('lessons.table_actions') }}
                                    </th>
                                </tr>
                                </thead>

                                <draggable v-model="lesson.quiz.questions" tag="tbody">
                                    <tr class="table-row" v-for="(listItem, index) in lesson.quiz.questions"
                                        :key="`listItem-${index}`">

                                        <td>
                                            {{ listItem.label }}
                                        </td>
                                        <td>
                                            {{ listItem.answers.length }}
                                        </td>
                                        <td class="table-actions" v-if="$hasRole('admin') || ($hasRole('teacher') && profile.upload_lessons)">
                                            <vs-button color="primary" type="filled"
                                                       @click="editQuestion(index, listItem)">
                                                {{ $t('lessons.edit_q') }}
                                            </vs-button>
                                            <vs-button color="danger" type="filled" @click="removeQuestion(index, listItem)">
                                                {{ $t('lessons.remove_q') }}
                                            </vs-button>
                                        </td>
                                    </tr>
                                </draggable>
                            </table>
                        </vs-list>

                        <span v-if="questionError" class="text-danger text-sm">hello {{ $t('lessons.questions_error') }}</span>
                    </div>
                </tab-content>

                <template slot="finish">
                    <vs-button @click="createLesson" color="primary" type="filled" :disabled="!validateForm">
                        {{ $t('lessons.wizard.submit') }}
                    </vs-button>
                </template>
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
            questionError: false,
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
            deletedQuestions: [],
            sidebarOpened: false,
            configDateTimePicker: {
                enableTime: true,
                dateFormat: 'Y-m-d H:i'
            }
        }
    },
    mounted() {
        this.loadCourses()
    },
    computed: {
        ...mapGetters({
            getCourses: 'Courses/getCourses',
            profile: 'Authentication/getProfile'
        }),
        validateForm() {
            return !this.errors.any() && this.lesson.quiz.questions && this.lesson.quiz.questions.length
        }
    },
    methods: {
        ...mapActions({
            loadCourses: 'Courses/loadCourses'
        }),
        async createLesson() {
            if(this.$hasRole('teacher') && !this.profile.upload_lessons) {
                return
            }

            await this.$validator.validate()

            if(!this.lesson.quiz.questions.length) {
                this.questionError = true
            }

            if (this.errors.any()) {
                return
            }

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
                await safwaAxios.put(`lessons/${this.$route.params.id}`, {
                    lesson,
                    deletedQuestions: this.deletedQuestions
                });
            } else {
                await safwaAxios.post('lessons', {
                    lesson
                });
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
        removeQuestion(index, question) {
            // if this is an old Question then grab it's id and delete it
            if (question.id) {
                this.deletedQuestions.push(question.id)
            }
            this.lesson.quiz.questions.splice(index, 1)
        },
        async updateAvatar(event) {
            // show loader
            this.$vs.loading()

            // upload image
            const data = new FormData();
            data.append('image', event.target.files[0]);

            const response = await safwaAxios.post(`media/upload/lesson/${this.lesson.id}`, data, {
                headers: {
                    'Content-Type': 'image/png'
                }
            })

            // set it into avatar block
            this.lesson.media = [response.data]

            // hide loader
            this.$vs.loading.close()
        },
        async removeAvatar() {
            await safwaAxios.get(`media/remove/lesson/${this.lesson.id}`)

            this.lesson.media = []
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
