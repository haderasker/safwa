<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ `${$t('student_exam.exam')} ${exam.label}` }}</h2>
            </div>
        </div>

        <vx-card :title="null">

            <div class="timer">
                <Timer v-model="totalSeconds" @finished="timeFinished"/>
            </div>

            <form-wizard
                :startIndex="2"
                class="questions"
                color="rgba(var(--vs-primary), 1)"
                errorColor="rgba(var(--vs-danger), 1)"
                :title="null"
                :subtitle="null"
                @on-complete="submitExam"
                @on-change="validateQuestion"
                :finishButtonText="$t('lessons.wizard.submit')"
                :nextButtonText="$t('lessons.wizard.next')"
                :backButtonText="$t('lessons.wizard.back')"
                shape="tab">

                <tab-content v-for="(question, questionIndex) in exam.questions" :key="`question-${question.id}`"
                             title="">
                    <h3 class="mt-8 mb-6 text-center">
                        {{ question.label }}
                    </h3>
                    <ul>
                        <li class="answer text-center" v-for="(answer, answerIndex) in question.answers">
                            <input type="radio" :id="`${questionIndex}-${answerIndex}-answer`"
                                   :name="`${questionIndex}-answer`" :value="answerIndex">
                            <label :for="`${questionIndex}-${answerIndex}-answer`">
                                {{ answer.label }}
                            </label>
                        </li>
                    </ul>
                </tab-content>

            </form-wizard>
        </vx-card>
    </div>
</template>

<script>
import safwaAxios from "../../axios";
import Timer from "../../components/Timer";
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    components: {
        FormWizard,
        TabContent,
        Timer
    },
    data() {
        return {
            leaveMessage: 'you are about to leave exam, if you did, you will loose your progress.',
            totalSeconds: 0,
            timer: null,
            exam: {
                id: 1,
                label: 'exam one',
                duration: 3, // H
                published_at: '2020-12-25 07:37:21',
                ended_at: '2020-12-25 07:37:21',
                level_id: 1,
                type: 'default',
                created_at: '2020-12-25 07:37:21',
                updated_at: '2020-12-25 07:37:21',
                level: {
                    id: 1,
                    name: 'Level One'
                },
                questions: [
                    {
                        id: 1,
                        exam_id: 1,
                        label: 'Question one',
                        score: 30,
                        order: 1,
                        answers: [
                            {
                                id: 1,
                                question_id: 1,
                                label: 'Question One Answer One',
                                is_correct: true
                            },
                            {
                                id: 2,
                                question_id: 1,
                                label: 'Question One Answer Two',
                                is_correct: false
                            },
                            {
                                id: 3,
                                question_id: 1,
                                label: 'Question One Answer Three',
                                is_correct: false
                            },
                        ]
                    },
                    {
                        id: 2,
                        exam_id: 1,
                        label: 'Question Two',
                        score: 40,
                        order: 2,
                        answers: [
                            {
                                id: 4,
                                question_id: 2,
                                label: 'Question Two Answer One',
                                is_correct: false
                            },
                            {
                                id: 5,
                                question_id: 2,
                                label: 'Question Two Answer Two',
                                is_correct: true
                            }
                        ]
                    },
                    {
                        id: 3,
                        exam_id: 1,
                        label: 'Question Three',
                        score: 40,
                        order: 3,
                        answers: [
                            {
                                id: 6,
                                question_id: 3,
                                label: 'Question Three Answer One',
                                is_correct: false
                            },
                            {
                                id: 7,
                                question_id: 3,
                                label: 'Question Three Answer Two',
                                is_correct: false
                            },
                            {
                                id: 8,
                                question_id: 3,
                                label: 'Question Three Answer Three',
                                is_correct: true
                            },
                            {
                                id: 9,
                                question_id: 3,
                                label: 'Question Three Answer Four',
                                is_correct: false
                            }
                        ]
                    },
                    {
                        id: 4,
                        exam_id: 1,
                        label: 'Question Four',
                        score: 40,
                        order: 4,
                        answers: [
                            {
                                id: 10,
                                question_id: 4,
                                label: 'Question Four Answer One',
                                is_correct: true
                            },
                            {
                                id: 11,
                                question_id: 4,
                                label: 'Question Four Answer Two',
                                is_correct: false
                            }
                        ]
                    }
                ]
            }
        }
    },
    beforeMount() {
        window.addEventListener("beforeunload", this.preventNav)
    },
    mounted() {
        this.loadExam()
        this.setTime()
    },
    beforeDestroy() {
        window.removeEventListener("beforeunload", this.preventNav);
    },
    beforeRouteLeave(to, from, next) {
        if (!window.confirm(this.leaveMessage)) {
            return;
        }
        next();
    },
    methods: {
        preventNav(event) {
            event.preventDefault()
            // Chrome requires returnValue to be set.
            event.returnValue = this.leaveMessage
        },
        setTime() {
            this.totalSeconds = this.exam.duration * 60 * 60
        },
        async loadExam() {
            // const response = safwaAxios.get(`exams/start/${this.$route.params.id}`)
            //
            // this.exam = response.data
        },
        validateQuestion() {

        },
        submitExam() {

        },
        timeFinished() {
        }
    }
}
</script>

<style lang="scss" scoped>
.questions::v-deep {
    .wizard-nav {
        display: none !important;
    }

    .wizard-tab-content {
        min-height: 400px;
        padding-bottom: 30px;
    }

    .wizard-card-footer {
        background: #f5f5f5;
        border-top: 1px solid #cccccc;
        padding: 30px 50px;
    }

    .answer {
        label {
            display: inline-block;
            padding: 10px 30px;
            margin-bottom: 10px;
            background: #f5f5f5;
            border-radius: 20px;
            min-width: 50%;
            color: #000000;
            cursor: pointer;

            &:hover {
                background: #eeeeee; //#dcdcdc;
            }
        }

        input {
            display: none;

            &:checked {
                + label {
                    background: #2182a3;
                    color: #FFFFFF;
                }
            }
        }
    }
}
</style>
