<template>
    <div>
        <h1>{{ $t('general.lessons') }}</h1>
        <vs-divider></vs-divider>
        <div class="vx-row">
            <div class="vx-col w-1/3" v-for="lesson in lessons">
                <vx-card class="mb-base">
                    <div slot="no-body">
                        <img :src="$getUrl(lesson.avatar) || require('@assets/images/logo/main-logo-white.jpg')" alt="content-img" class="responsive card-img-top dashboard-image">
                    </div>
                    <h4 class="mb-2 text-center font-bold">{{ lesson.label }}</h4>
                    <p class="text-grey text-center">{{ lesson.course_name }}</p>
                </vx-card>
            </div>
        </div>

        <h1>{{ $t('general.courses') }}</h1>
        <vs-divider></vs-divider>
        <div class="vx-row">
            <div class="vx-col w-1/3" v-for="subject in subjects">
                <vx-card class="mb-base">
                    <div slot="no-body">
                        <img :src="$getUrl(subject.avatar) || require('@assets/images/logo/main-logo-white.jpg')" alt="content-img" class="responsive card-img-top dashboard-image">
                    </div>
                    <h4 class="mb-2 text-center font-bold">{{ subject.name }}</h4>
                    <p class="text-grey text-center">{{ subject.lessons_count }}</p>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import safwaAxios from "../../axios";

export default {
    components: {
        StatisticsCardLine
    },
    data() {
        return {
            subjects: [],
            lessons: []
        }
    },
    mounted() {
        this.loadStatistics()
    },
    methods: {
        async loadStatistics() {
            const response = await safwaAxios.get('statistics/student')

            this.subjects = response.data.courses
            this.lessons = response.data.lessons
        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard-image {
    max-height: 200px;
}
</style>
