<template>
    <div>
        <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" @submitData="saveQuestion" :data="sidebarData"/>

        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('exams.create_exam_title') }}</h2>
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
                :finishButtonText="$t('exams.create')"
                :nextButtonText="$t('exams.next')"
                :backButtonText="$t('exams.back')">

                <tab-content
                    :lazy="true"
                    :title="$t('exams.step1.title')"
                    class="mb-5">

                    <vs-divider/>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.select_subject') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="subjects" v-model="selectedSubject"></v-select>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.select_level') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="levels" v-model="selectedLevel"></v-select>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_type') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <v-select label="name" :options="types" v-model="selectedType"></v-select>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_start_date') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <datepicker placeholder="Select Date" v-model="startDate"></datepicker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_end_date') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <datepicker placeholder="Select Date" v-model="endDate"></datepicker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('exams.exam_duration') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input type="number" class="w-full" v-model="duration"/>
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
                            <vs-button @click="addQuestion" color="primary" type="filled" size="small">
                                {{ $t('exams.add_q') }}
                            </vs-button>
                        </div>
                    </div>

                    <div class="vx-row mb-6">
                        <vs-list>
                            <vs-list-header :title="$t('exams.q_list')" color="primary"></vs-list-header>

                            <draggable :list="questionsList">
                                <transition-group>
                                    <vs-list-item
                                        class="list-item"
                                        v-for="(listItem, index) in questionsList"
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
import DataViewSidebar from "./components/DataViewSidebar";
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Datepicker from 'vuejs-datepicker'
import draggable from 'vuedraggable'

export default {
    components: {
        FormWizard,
        TabContent,
        Datepicker,
        draggable,
        DataViewSidebar
    },
    data() {
        return {
            subjects: [
                {
                    id: 1,
                    name: "subject one"
                }
            ],
            levels: [
                {
                    id: 1,
                    name: "level one"
                }
            ],
            selectedLevel: null,
            selectedSubject: null,
            selectedType: null,
            duration: 1,
            startDate: new Date(),
            endDate: new Date(),
            questionsList: [],
            addNewDataSidebar: false,
            sidebarData: {}
        }
    },
    computed: {
        types() {
            return [
                {
                    id: 1,
                    name: this.$t('exams.types.one')
                },
                {
                    id: 2,
                    name: this.$t('exams.types.two')
                },
            ]
        }
    },
    methods: {
        toggleDataSidebar(val = false) {
            this.addNewDataSidebar = val
        },
        createExam() {
            // save exam
        },
        validateStep(prevIndex, nextIndex) {
            // validate form
        },
        addQuestion() {
            this.sidebarData = {}
            this.toggleDataSidebar(true)
        },
        editQuestion(index, data) {
            console.log({data})
            const correctAnswer = data.answers.findIndex(answer => !!answer.correct)

            this.sidebarData = {
                ...data,
                correctAnswer,
                index
            }

            console.log(this.sidebarData)

            this.toggleDataSidebar(true)
        },
        removeQuestion(index) {
            this.questionsList.splice(index, 1)
        },
        saveQuestion(q) {
            if(q.index) {
                this.questionsList[q.index] = q
            } else {
                this.questionsList.push(q)
            }

            this.toggleDataSidebar(false)
        }
    }
}
</script>

<style lang="scss" scoped></style>
