<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('academic_years.create_year_title') }}</h2>
            </div>
        </div>

        <vx-card>
            <form-wizard
                :startIndex="0"
                color="rgba(var(--vs-primary), 1)"
                errorColor="rgba(var(--vs-danger), 1)"
                :title="null"
                :subtitle="null"
                @on-complete="createYear"
                @on-change="validateStep"
                :finishButtonText="$t('academic_years.create_year')"
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
                            <datepicker placeholder="Select Date" v-model="year.first_semester.start"></datepicker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('academic_years.create.first_semester.end') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <datepicker placeholder="Select Date" v-model="year.first_semester.end"></datepicker>
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
                            <datepicker placeholder="Select Date" v-model="year.second_semester.start"></datepicker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-1/4">
                            <span>{{ $t('academic_years.create.second_semester.end') }}</span>
                        </div>
                        <div class="vx-col w-3/4">
                            <datepicker placeholder="Select Date" v-model="year.second_semester.end"></datepicker>
                        </div>
                    </div>

                </tab-content>

                <tab-content
                    :lazy="true"
                    :title="$t('academic_years.step2.title')"
                    class="mb-5">

                    <vs-tabs alignment="fixed">
                        <vs-tab :label="$t('academic_years.create.level1')">
                            <h4 class="mb-5 mt-5">
                                {{ $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t('academic_years.create.level1') }}
                            </h4>
                            <ul>
                                <li v-for="course in courses" class="w-1/2 float-left">
                                    <vs-checkbox class="py-4" v-model="year.first_semester.levels.level1" :vs-value="course.id">
                                        {{ course.name }}
                                    </vs-checkbox>
                                </li>
                            </ul>
                        </vs-tab>
                        <vs-tab :label="$t('academic_years.create.level2')">
                            <h4 class="mb-5 mt-5">
                                {{ $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t('academic_years.create.level2') }}
                            </h4>
                            <ul>
                                <li v-for="course in courses" class="w-1/2 float-left">
                                    <vs-checkbox class="py-4" v-model="year.first_semester.levels.level2" :vs-value="course.id">
                                        {{ course.name }}
                                    </vs-checkbox>
                                </li>
                            </ul>
                        </vs-tab>
                        <vs-tab :label="$t('academic_years.create.level3')">
                            <h4 class="mb-5 mt-5">
                                {{ $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t('academic_years.create.level3') }}
                            </h4>
                            <ul>
                                <li v-for="course in courses" class="w-1/2 float-left">
                                    <vs-checkbox class="py-4" v-model="year.first_semester.levels.level3" :vs-value="course.id">
                                        {{ course.name }}
                                    </vs-checkbox>
                                </li>
                            </ul>
                        </vs-tab>
                        <vs-tab :label="$t('academic_years.create.level4')">
                            <h4 class="mb-5 mt-5">
                                {{ $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t('academic_years.create.level4') }}
                            </h4>
                            <ul>
                                <li v-for="course in courses" class="w-1/2 float-left">
                                    <vs-checkbox class="py-4" v-model="year.first_semester.levels.level4" :vs-value="course.id">
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
                        <vs-tab :label="$t('academic_years.create.level1')">
                            <h4 class="mb-5 mt-5">
                                {{ $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t('academic_years.create.level1') }}
                            </h4>
                            <ul>
                                <li v-for="course in courses" class="w-1/2 float-left">
                                    <vs-checkbox class="py-4" v-model="year.second_semester.levels.level1" :vs-value="course.id">
                                        {{ course.name }}
                                    </vs-checkbox>
                                </li>
                            </ul>
                        </vs-tab>
                        <vs-tab :label="$t('academic_years.create.level2')">
                            <h4 class="mb-5 mt-5">
                                {{ $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t('academic_years.create.level2') }}
                            </h4>
                            <ul>
                                <li v-for="course in courses" class="w-1/2 float-left">
                                    <vs-checkbox class="py-4" v-model="year.second_semester.levels.level2" :vs-value="course.id">
                                        {{ course.name }}
                                    </vs-checkbox>
                                </li>
                            </ul>
                        </vs-tab>
                        <vs-tab :label="$t('academic_years.create.level3')">
                            <h4 class="mb-5 mt-5">
                                {{ $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t('academic_years.create.level3') }}
                            </h4>
                            <ul>
                                <li v-for="course in courses" class="w-1/2 float-left">
                                    <vs-checkbox class="py-4" v-model="year.second_semester.levels.level3" :vs-value="course.id">
                                        {{ course.name }}
                                    </vs-checkbox>
                                </li>
                            </ul>
                        </vs-tab>
                        <vs-tab :label="$t('academic_years.create.level4')">
                            <h4 class="mb-5 mt-5">
                                {{ $t('academic_years.create.select_courses') + ' ' + $t('academic_years.create.for') + ' ' + $t('academic_years.create.level4') }}
                            </h4>
                            <ul>
                                <li v-for="course in courses" class="w-1/2 float-left">
                                    <vs-checkbox class="py-4" v-model="year.second_semester.levels.level4" :vs-value="course.id">
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
import Datepicker from 'vuejs-datepicker'

export default {
    components: {
        FormWizard,
        TabContent,
        Datepicker,
    },
    props: ['year'],
    data() {
        return {
            courses: [
                {
                    id: 1,
                    name: 'course 1'
                },
                {
                    id: 2,
                    name: 'course 2'
                },
                {
                    id: 3,
                    name: 'course 3'
                },
                {
                    id: 4,
                    name: 'course 4'
                },
                {
                    id: 5,
                    name: 'course 5'
                },
                {
                    id: 6,
                    name: 'course 6'
                },
                {
                    id: 7,
                    name: 'course 7'
                },
                {
                    id: 8,
                    name: 'course 8'
                },
                {
                    id: 9,
                    name: 'course 9'
                },
                {
                    id: 10,
                    name: 'course 10'
                },
                {
                    id: 11,
                    name: 'course 11'
                }
            ],
        }
    },
    methods: {
        createYear() {
        },
        validateStep() {
        }
    }
}
</script>

<style lang="scss" scoped></style>
