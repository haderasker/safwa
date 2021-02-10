<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('student_lesson_profile.lesson') + ' ' + lesson.label }}</h2>
            </div>
        </div>
        <vx-card :title="null">
            <vs-tabs alignment="fixed">
                <vs-tab :label="$t('student_lesson_profile.info')">
                    <div class="vx-row">
                        <div class="vx-col w-1/2">
                            <router-link :to="{ name: 'student-course.profile', params: { id: lesson.course.id } }">
                                <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="EyeIcon"
                                    :statistic="$t('student_lesson_profile.course')"
                                    :statisticTitle="lesson.course.name"/>
                            </router-link>

                        </div>

                        <div class="vx-col w-1/2">
                            <statistics-card-line
                                hideChart
                                class="mb-base"
                                icon="EyeIcon"
                                :statistic="$t('student_lesson_profile.published_at')"
                                :statisticTitle="lesson.published_at | moment('dddd, YYYY MMMM Do h:mm a')"/>
                        </div>
                    </div>

                    <h4 class="mb-6">{{ $t('student_lesson_profile.content') }}</h4>

                    <div class="vx-row">
                        <div v-if="lesson.youtube" class="vx-col w-1/3">
                            <a :href="lesson.youtube" target="_blank">
                                <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="YoutubeIcon"
                                    :statistic="$t('student_lesson_profile.youtube')"/>
                            </a>
                        </div>
                        <div v-if="lesson.soundcloud" class="vx-col w-1/3">
                            <a :href="lesson.soundcloud" target="_blank">
                                <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="HeadphonesIcon"
                                    :statistic="$t('student_lesson_profile.soundcloud')"/>
                            </a>
                        </div>
                        <div v-if="lesson.pdf" class="vx-col w-1/3">
                            <a :href="lesson.pdf" target="_blank">
                                <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="FileTextIcon"
                                    :statistic="$t('student_lesson_profile.pdf')"/>
                            </a>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col w-1/3">

                            <vs-button
                                v-if="lesson.quiz.id && lesson.quiz.student_exam && !lesson.quiz.student_exam[0].passed"
                                color="primary"
                                type="filled"
                                @click.prevent="startQuiz">
                                {{ $t('student_lesson_profile.start_quiz') }}
                            </vs-button>
                        </div>

                        <div class="vx-col w-1/3">
                            {{ $t('student_lesson_profile.last_score') }}: {{ lesson.quiz.student_exam ? lesson.quiz.student_exam[0].score : 0 }} / {{ lesson.quiz.totalScore }}
                        </div>
                    </div>
                </vs-tab>

                <vs-tab :label="$t('student_lesson_profile.discussion')">
                    <comments-section :commentableId="$route.params.id"
                                      :commentableType="commentableType"></comments-section>
                </vs-tab>
            </vs-tabs>
        </vx-card>
    </div>
</template>

<script>
import safwaAxios from "../../axios";
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import CommentsSection from '../../components/CommentsSection'

export default {
    components: {
        StatisticsCardLine,
        CommentsSection
    },
    data() {
        return {
            commentableType: 'lesson',
            lesson: {
                course: {},
                quiz: {}
            }
        }
    },
    mounted() {
        this.loadLesson()
    },
    methods: {
        async loadLesson() {
            const response = await safwaAxios.get(`students/lessons/${this.$route.params.id}`)

            response.data.quiz.totalScore = response.data.quiz.questions.reduce((total, current) => total + current.score, 0)

            this.lesson = response.data
        },

        async startQuiz() {
            const quizId = this.lesson.quiz.id

            await safwaAxios.get(`students/exams/${quizId}/start`)

            this.$router.push({
                name: 'student-exam',
                params: {
                    id: quizId
                }
            }).catch()
        }
    }
}
</script>

<style lang="scss" scoped></style>
