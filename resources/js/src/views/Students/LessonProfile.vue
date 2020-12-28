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
                        <div class="vx-col w-1/3">
                            <a :href="lesson.youtube" target="_blank">
                                <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="YoutubeIcon"
                                    :statistic="$t('student_lesson_profile.youtube')"/>
                            </a>
                        </div>
                        <div class="vx-col w-1/3">
                            <a :href="lesson.soundcloud" target="_blank">
                                <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="HeadphonesIcon"
                                    :statistic="$t('student_lesson_profile.soundcloud')"/>
                            </a>
                        </div>
                        <div class="vx-col w-1/3">
                            <a :href="lesson.pdf" target="_blank">
                                <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="FileTextIcon"
                                    :statistic="$t('student_lesson_profile.pdf')"/>
                            </a>
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
                label: 'lesson one',
                youtube: 'https://www.youtube.com/watch?v=Shfi_tCSYrE&ab_channel=ChessSchool',
                soundcloud: 'https://soundcloud.com/aboveandbeyond/group-therapy-412-with-above',
                pdf: '',
                published_at: '2021-01-07 07:35:51',
                course: {
                    id: 44,
                    name: 'Course One'
                }
            }
        }
    },
    mounted() {
        this.loadLesson()
    },
    methods: {
        async loadLesson() {
            // const response = await safwaAxios.get(`lessons/${this.$route.params.id}`)
            //
            // this.lesson = response.data
        }
    }
}
</script>

<style lang="scss" scoped></style>
