<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ `${$t('student_exam.exam')} ${exam.label}` }}</h2>
            </div>
        </div>

        <vx-card :title="null">
            <form-wizard
                :startIndex="0"
                class="questions"
                color="rgba(var(--vs-primary), 1)"
                errorColor="rgba(var(--vs-danger), 1)"
                :title="null"
                :subtitle="null"
                :finishButtonText="null"
                :nextButtonText="$t('lessons.wizard.next')"
                :backButtonText="$t('lessons.wizard.back')"
                shape="tab">

                <tab-content v-for="(question, questionIndex) in exam.questions" :key="`question-${question.id}`"
                             title="">
                    <h3 class="mt-8 mb-6 text-center" :class="{
                        correctQuestion: question.correctAnswer.id === exam.responses[questionIndex].answer_id,
                        wrongQuestion: question.correctAnswer.id !== exam.responses[questionIndex].answer_id
                    }">
                        {{ question.label }}
                    </h3>
                    <ul>
                        <li class="answer text-center" v-for="(answer, answerIndex) in question.answers">
                            <input
                                :class="{
                                    student_correct_answer: exam.responses[questionIndex].answer_id === answer.id && answer.is_correct,
                                    student_wrong_answer: exam.responses[questionIndex].answer_id === answer.id && !answer.is_correct
                                }"
                                type="radio"
                                :id="`${questionIndex}-${answerIndex}-answer`"
                                :name="`${questionIndex}-answer`"
                                :value="answer.id"
                                v-model="userAnswers[question.id]">

                            <label :for="`${questionIndex}-${answerIndex}-answer`">
                                {{ answer.label }}
                            </label>
                        </li>
                    </ul>

                    <div v-if="question.correctAnswer.id !== exam.responses[questionIndex].answer_id">
                        {{ question.correctAnswer.label }}
                    </div>
                </tab-content>

                <template slot="finish" slot-scope="props">
                    <!-- hide finish button just empty span -->
                    <span></span>
                </template>
            </form-wizard>
        </vx-card>
    </div>
</template>

<script>
import safwaAxios from "../../axios";
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    components: {
        FormWizard,
        TabContent
    },
    data() {
        return {
            exam: {},
            userAnswers: {}
        }
    },
    mounted() {
        this.loadExam()
    },
    methods: {
        async loadExam() {
            const response = await safwaAxios.get(`students/exams/${this.$route.params.id}/results`)

            this.exam = response.data

            this.exam.questions.forEach(question => {
                this.userAnswers[question.id] = -1

                question.correctAnswer = question.answers.filter(answer => answer.is_correct === 1)[0]
            })

            console.log(this.exam.questions)
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

    .correctQuestion {
        color: rgb(40,199,111);
    }

    .wrongQuestion {
        color: rgb(234,84,85);
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
        }

        input {
            display: none;

            &.student_correct_answer {
                + label {
                    background: rgb(40,199,111);
                    color: #FFFFFF;
                }
            }

            &.student_wrong_answer {
                + label {
                    background: rgb(234,84,85);
                    color: #ffffff;
                }
            }
        }
    }
}
</style>
