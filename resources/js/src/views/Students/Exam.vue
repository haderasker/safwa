<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ `${$t('student_exam.exam')} ${exam.label}` }}</h2>
            </div>
        </div>

        <vx-card :title="null">

            <div class="timer" v-if="exam.duration">
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
                            <input
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
            leaveMessage: this.$t('student_exam.leave_message'),
            totalSeconds: Number.MAX_SAFE_INTEGER,
            timer: null,
            exam: {},
            userAnswers: {},
            submitExamFlag: false
        }
    },
    beforeMount() {
        window.addEventListener("beforeunload", this.preventNav)
    },
    async created() {
        await this.startExam()
        this.loadExam().catch()
    },
    beforeDestroy() {
        window.removeEventListener("beforeunload", this.preventNav);
    },
    beforeRouteLeave(to, from, next) {
        if(this.submitExamFlag) {
            return next()
        }

        if (!window.confirm(this.leaveMessage)) {
            return;
        }
        return next();
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

        async startExam() {
            await safwaAxios.get(`students/exams/${this.$route.params.id}/start`)
        },

        async loadExam() {
            const response = await safwaAxios.get(`exams/${this.$route.params.id}`)

            this.exam = response.data

            this.exam.questions.forEach(question => {
                this.userAnswers[question.id] = -1
            })

            this.setTime()
        },

        validateQuestion() {

        },

        async submitExam() {
            // display a popup and redirect to all exams
            this.$vs.dialog({
                type: 'confirm',
                color: 'warning',
                title: this.$t('student_exam.leave_exam_title'),
                text: this.$t('student_exam.leave_exam_message'),
                accept: async () => {
                    await safwaAxios.post(`students/exams/${this.$route.params.id}`, {
                        answers: this.userAnswers
                    })

                    // stop alert message
                    this.submitExamFlag = true
                    this.$router.push({
                        name: 'student-exams'
                    }).catch()
                }
            })

        },

        async timeFinished() {
            // we should submit the exam anyway
            await safwaAxios.post(`students/exams/${this.$route.params.id}`, {
                answers: this.userAnswers
            })

            this.submitExamFlag = true
            await this.$router.push({
                name: 'student-exams'
            })

            // show popup
            this.$vs.dialog({
                type: 'alert',
                color: 'warning',
                buttonCancel: false,
                title: this.$t('student_exam.time_finished_title'),
                text: this.$t('student_exam.time_finished_message')
            })
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
