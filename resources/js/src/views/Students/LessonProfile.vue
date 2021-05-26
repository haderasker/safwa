<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('student_lesson_profile.lesson') + ' ' + lesson.label }}</h2>
            </div>
        </div>
        <vx-card :title="$t('student_lesson_profile.info')" class="mb-6">
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
                        :statistic="$t('student_lesson_profile.lesson_name')"
                        :statisticTitle="lesson.label"/>
                </div>
            </div>

        </vx-card>

        <vx-card :title="$t('student_lesson_profile.content')" class="mb-6">
            <div class="vx-row">
                <div v-if="lesson.youtube" class="vx-col w-1/3">
                    <a href="#" @click.prevent="content = 'youtube'">
                        <statistics-card-line
                            @click=""
                            hideChart
                            class="mb-base"
                            icon="YoutubeIcon"
                            :statistic="$t('student_lesson_profile.youtube')"/>
                    </a>
                </div>
                <div v-if="lesson.soundcloud" class="vx-col w-1/3">
                    <a href="#" @click.prevent="content = 'soundcloud'">
                        <statistics-card-line
                            hideChart
                            class="mb-base"
                            icon="HeadphonesIcon"
                            :statistic="$t('student_lesson_profile.soundcloud')"/>
                    </a>
                </div>
                <div v-if="lesson.pdf" class="vx-col w-1/3">
                    <router-link :to="lesson.pdf" target="_blank">
                        <statistics-card-line
                            hideChart
                            class="mb-base"
                            icon="FileTextIcon"
                            :statistic="$t('student_lesson_profile.pdf')"/>
                    </router-link>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col w-full text-center" style="display: none;" v-show="content === 'youtube'">
                    <youtube ref="youtubePlayer" :video-id="videoId"></youtube>
                </div>

                <div
                    class="vx-col w-full"
                    style="display: none;"
                    v-show="content === 'soundcloud'"
                    v-html="lesson.soundcloud"></div>
            </div>
        </vx-card>

        <vx-card :title="$t('student_lesson_profile.quiz')" class="mb-6">
            <div class="vx-row">
                <div class="vx-col w-full">
                    <!--          v-if="lesson.quiz.id && lesson.quiz.student_exam && !lesson.quiz.student_exam[0].passed"-->
                    <vs-button
                        v-if="lesson.viewed === 'true'"
                        color="primary"
                        type="filled"
                        @click.prevent="startQuiz">
                        {{ $t('student_lesson_profile.start_quiz') }}
                    </vs-button>

                    <vs-button
                        v-if="lesson.viewed === 'false'"
                        color="warning"
                        type="filled"
                        @click.prevent="finishedLesson">
                        {{ $t('student_lesson_profile.finished_lesson') }}
                    </vs-button>

                    <!--          {{ $t('student_lesson_profile.last_score') }}:-->
                    <!--          {{ lesson.quiz.student_exam ? lesson.quiz.student_exam[0].score : 0 }} / {{ lesson.quiz.totalScore }}-->
                </div>
            </div>
        </vx-card>

        <vx-card :title="$t('student_lesson_profile.discussion')">
            <comments-section
                :commentableId="$route.params.id"
                :commentableType="commentableType">
            </comments-section>
        </vx-card>
    </div>
</template>


<script>
import safwaAxios from "../../axios";
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import CommentsSection from '../../components/CommentsSection'
import {Youtube, getIdFromUrl} from 'vue-youtube'

export default {
    components: {
        StatisticsCardLine,
        CommentsSection,
        Youtube
    },
    data() {
        return {
            commentableType: 'lesson',
            content: null,
            lesson: {
                course: {},
                quiz: {}
            }
        }
    },
    mounted() {
        this.loadLesson()
    },
    watch: {
        content(val) {
            if (val !== 'youtube') {
                this.$refs.youtubePlayer.player.stopVideo()
            }
        }
    },
    computed: {
        videoId() {
            return getIdFromUrl(this.lesson.youtube)
        }
    },
    methods: {
        async loadLesson() {
            const response = await safwaAxios.get(`students/lessons/${this.$route.params.id}`)

            response.data.quiz.totalScore = response.data.quiz.questions.reduce((total, current) => total + current.score, 0)

            this.lesson = response.data
        },

        async startQuiz() {
            this.$router.push({
                name: 'student-exam',
                params: {
                    id: this.lesson.quiz.id
                }
            }).catch()
        },

        async finishedLesson() {
            if (this.lesson.viewed === 'true') {
                return
            }

            this.confirm(
                this.$t('student_lesson_profile.lesson_finish.title'),
                this.$t('student_lesson_profile.lesson_finish.message'),
                this.finished
            )
        },

        async finished() {
            await safwaAxios.get(`students/lessons/${this.$route.params.id}/finish`)

            this.lesson.viewed = 'true'
        }
    }
}
</script>

<style lang="scss" scoped></style>
