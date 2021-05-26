<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('student_courses.title') }}</h2>
            </div>
        </div>

        <vs-divider></vs-divider>

        <div class="vx-row">
            <div class="vx-col w-1/3" v-for="course in courses">
                <vx-card class="mb-base cursor-pointer" @click="$router.push({name: 'student-course.profile', params: {id: course.id}})">
                    <div slot="no-body">
                        <img :src="$getUrl(course.media[0]) || require('@assets/images/logo/main-logo-white.jpg')" alt="content-img" class="responsive card-img-top dashboard-image">
                    </div>
                    <h4 class="mb-2 text-center font-bold">{{ course.name }}</h4>
                    <p class="text-grey text-center">{{ $t(`student_courses.${course.pivot.type}`) }}</p>
                    <p class="text-grey text-center" v-if="course.teacher">{{ course.teacher.name }}</p>
                    <p class="text-grey text-center">{{ course.lessons_count }}</p>
                </vx-card>
            </div>
        </div>

<!--        <vx-card :title="$t('student_courses.all_courses')">-->
<!--            <template slot="actions">-->
<!--                <vx-tooltip position="right" :text="$t('student_courses.filter_tooltip')"-->
<!--                            class="ml-auto md:block hidden cursor-pointer">-->
<!--                    <vs-button icon="icon-filter" icon-pack="feather" @click="showFilters"/>-->
<!--                </vx-tooltip>-->
<!--            </template>-->
<!--            <div v-if="filters" class="mb-5">-->
<!--                <div class="vx-row">-->
<!--                    <div class="vx-col w-1/2">-->
<!--                        <vs-input class="w-full" :label-placeholder="`hema`" v-model="agFilters.name"/>-->
<!--                    </div>-->
<!--                    <div class="vx-col w-1/2">-->
<!--                        <vs-button class="mr-3 mt-5">{{ $t('student_courses.filter') }}</vs-button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <ag-table-->
<!--                ref="agTable"-->
<!--                :filters="agFilters"-->
<!--                :columns="agColumns"-->
<!--                :options="agOptions"-->
<!--            ></ag-table>-->
<!--        </vx-card>-->
    </div>
</template>

<script>
import AgTable from "../../components/AgTable";
import StudentCoursesDataSource from "../../datasources/StudentCoursesDataSource";
import tableActionColumnCell from '../../components/TableActionColumnCell'
import safwaAxios from "../../axios";

export default {
    // components: {
        // AgTable,
        // tableActionColumnCell
    // },
    data() {
        return {
            courses: []
            // filters: false,
            // agFilters: {
            //     name: null
            // },
            // agOptions: {
            //     dataSource: StudentCoursesDataSource
            // }
        }
    },
    // computed: {
    //     agColumns() {
    //         const self = this
    //         return [
    //             {
    //                 headerName: this.$t('student_courses.list.column_name'),
    //                 field: 'name',
    //                 minWidth: 170,
    //                 sortable: true
    //             },
    //             {
    //                 headerName: this.$t('student_courses.list.column_teacher'),
    //                 field: 'teacher.name',
    //                 minWidth: 170,
    //                 sortable: true
    //             },
    //             {
    //                 headerName: this.$t('student_courses.list.column_lesson_num'),
    //                 field: 'lessons_count',
    //                 minWidth: 170,
    //                 sortable: true
    //             },
    //             {
    //                 headerName: this.$t('student_courses.list.column_type'),
    //                 minWidth: 170,
    //                 sortable: true,
    //                 valueGetter(params) {
    //                     return self.$t(`general.course_type_${params.data.pivot.type}`)
    //                 }
    //             },
    //             {
    //                 headerName: this.$t('student_courses.list.column_actions'),
    //                 minWidth: 170,
    //                 cellRendererParams: {
    //                     routeName: 'student-course.profile'
    //                 },
    //                 cellRendererFramework: 'tableActionColumnCell'
    //             },
    //         ]
    //     }
    // },
    mounted() {
        this.loadCourses()
    },
    methods: {
        async loadCourses() {
            const response = await safwaAxios.post('students/courses/list')

            this.courses = response.data.data
        }
        // showFilters() {
        //     this.filters = !this.filters
        // }
    }
}
</script>

<style lang="scss" scoped></style>
