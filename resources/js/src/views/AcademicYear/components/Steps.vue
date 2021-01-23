<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $route.params.id ? $t('academic_years.edit_year_title') + year.label : $t('academic_years.create_year_title') }}</h2>
            </div>
        </div>

        <vx-card>
            <form-wizard
                :startIndex="0"
                color="rgba(var(--vs-primary), 1)"
                errorColor="rgba(var(--vs-danger), 1)"
                :title="null"
                :subtitle="null"
                @on-complete="createAcademicYear"
                @on-change="validateStep"
                :finishButtonText="$route.params.id ? $t('academic_years.edit_year') : $t('academic_years.create_year')"
                :nextButtonText="$t('academic_years.next')"
                :backButtonText="$t('academic_years.back')">

                <tab-content
                    :lazy="true"
                    :title="$t('academic_years.step1.title')"
                    class="mb-5">

                    <vs-divider/>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('academic_years.create.label') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <vs-input class="w-full" v-model="year.label"/>
                        </div>
                    </div>

                    <h4 class="mb-5">
                        {{ $t('academic_years.create.first_semester.label') }}
                    </h4>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('academic_years.create.first_semester.start') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <flat-picker class="w-full" placeholder="Select Date" v-model="year.semesters[0].start" :config="dateConfig"></flat-picker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('academic_years.create.first_semester.end') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <flat-picker class="w-full" placeholder="Select Date" v-model="year.semesters[0].end" :config="dateConfig"></flat-picker>
                        </div>
                    </div>

                    <h4 class="mb-5">
                        {{ $t('academic_years.create.second_semester.label') }}
                    </h4>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('academic_years.create.second_semester.start') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <flat-picker class="w-full" placeholder="Select Date" v-model="year.semesters[1].start" :config="dateConfig"></flat-picker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('academic_years.create.second_semester.end') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <flat-picker class="w-full" placeholder="Select Date" v-model="year.semesters[1].end" :config="dateConfig"></flat-picker>
                        </div>
                    </div>

                </tab-content>

                <tab-content
                    :lazy="true"
                    :title="$t('academic_years.step2.title')"
                    class="mb-5">

                    <vs-tabs alignment="fixed">
                        <vs-tab v-for="(level, index) in getLevels" :key="`semester-1-${index}`" :label="$t(`academic_years.create.${level.name}`)">
                            <h4 class="mb-5 mt-5">
                                {{
                                    $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t(`academic_years.create.${level.name}`)
                                }}
                            </h4>

                            <ul>
                                <li v-for="course in getCourses" class="w-1/2 float-left">
                                    <vs-checkbox
                                        class="py-4"
                                        :vs-value="course.id"
                                        v-model="year.semesters[0].levels[index].course_ids">
                                        {{ course.name }}
                                    </vs-checkbox>
                                </li>
                            </ul>
                        </vs-tab>
                    </vs-tabs>
                </tab-content>

                <tab-content
                    :lazy="true"
                    :title="$t('academic_years.step3.title')"
                    class="mb-5">

                    <vs-tabs alignment="fixed">
                        <vs-tab v-for="(level, index) in getLevels" :key="`semester-2-${index}`" :label="$t(`academic_years.create.${level.name}`)">
                            <h4 class="mb-5 mt-5">
                                {{
                                    $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t(`academic_years.create.${level.name}`)
                                }}
                            </h4>

                            <ul>
                                <li v-for="course in getCourses" class="w-1/2 float-left">
                                    <vs-checkbox
                                        class="py-4"
                                        :vs-value="course.id"
                                        v-model="year.semesters[1].levels[index].course_ids">
                                        {{ course.name }}
                                    </vs-checkbox>
                                </li>
                            </ul>
                        </vs-tab>
                    </vs-tabs>
                </tab-content>
            </form-wizard>
        </vx-card>
    </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import flatPicker from 'vue-flatpickr-component';
import {mapActions, mapGetters} from 'vuex'
import safwaAxios from "../../../axios";

import 'flatpickr/dist/flatpickr.css';

export default {
    components: {
        FormWizard,
        TabContent,
        flatPicker,
    },
    props: ['year'],
    data() {
        return {
            dateConfig: {
                enableTime: false,
                dateFormat: 'Y-m-d'
            }
        }
    },
    computed: {
        ...mapGetters({
            getCourses: 'Courses/getCourses'
        }),
        getLevels() {
            const levels = this.$store.getters['Levels/getLevels']

            if (!levels.length) {
                return [{}]
            }

            return levels
        }
    },
    mounted() {
        this.loadLevels()
        this.loadCourses()
    },
    methods: {
        ...mapActions({
            loadLevels: 'Levels/loadLevels',
            loadCourses: 'Courses/loadCourses'
        }),
        async createAcademicYear() {
            const year = JSON.parse(JSON.stringify(this.year))

            year.semesters.forEach((semester, semesterIndex) => {
                semester.label = `semester_${semesterIndex + 1}`

                semester.levels.forEach((level, levelIndex) => {
                    level.id = levelIndex + 1
                })
            })

            if (this.$route.params.id) {
                await safwaAxios.put(`academic-years/${this.$route.params.id}`, year)
            } else {
                await safwaAxios.post('academic-years', year)
                this.$router.push({name: 'academic-years.list'}).catch();
            }
        },
        validateStep() {
        }
    }
}
</script>

<style lang="scss" scoped></style>
