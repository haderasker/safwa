<template>
    <div class="vx-row">
        <div class="vx-col w-1/3" v-for="subject in subjects">
            <vx-card class="mb-base">
                <div slot="no-body">
                    <img :src="$getUrl(subject.media[0]) || require('@assets/images/logo/main-logo-white.jpg')" alt="content-img" class="responsive card-img-top dashboard-image">
                </div>
                <h4 class="mb-2 text-center font-bold">{{ subject.name }}</h4>
                <p class="text-grey text-center">{{ subject.lessons_count }}</p>
            </vx-card>
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
            subjects: []
        }
    },
    mounted() {
        this.getTeacherSubjects()
    },
    methods: {
        async getTeacherSubjects () {
            const response = await safwaAxios.get(`statistics/teacher`)

            this.subjects = response.data
        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard-image {
    max-height: 200px;
}
</style>
