<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $route.params.id ? $t('courses.edit_title') : $t('courses.create_title') }}</h2>
            </div>
        </div>

        <vx-card>

            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('courses.course_name') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input class="w-full" :placeholder="$t('courses.course_name')" v-model="course.name"/>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('courses.teacher_name') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <v-select label="name" :options="listOfTeachers.data" v-model="course.teacher"></v-select>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('courses.course_description') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-textarea class="w-full" v-model="course.description"/>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('courses.highest_score') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input type="number" class="w-full" :placeholder="$t('courses.highest_score')"
                              v-model="course.max_score"/>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('courses.lowest_score') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input type="number" class="w-full" :placeholder="$t('courses.lowest_score')"
                              v-model="course.min_score"/>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('courses.doctrine') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <v-select label="name" :options="listOfDoctrines" v-model="course.doctrine"></v-select>
                </div>
            </div>

            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-button color="primary" type="filled" @click="saveCourse">
                        {{ $route.params.id ? $t('courses.update') : $t('courses.save') }}
                    </vs-button>
                    <vs-button v-if="$route.params.id" color="success" type="filled">
                        {{ $t('courses.lessons_list') }}
                    </vs-button>
                </div>
            </div>

        </vx-card>
    </div>
</template>

<script>
import safwaAxios from "../../../axios";
import {mapActions, mapGetters} from 'vuex';

export default {
    props: ['course'],
    mounted() {
        this.loadDoctrines()
        this.loadTeachers()
    },
    computed: {
        ...mapGetters({
            listOfTeachers: 'Teachers/getTeachers',
            listOfDoctrines: 'Doctrines/getDoctrines',
        })
    },
    methods: {
        ...mapActions({
            loadDoctrines: 'Doctrines/loadDoctrines',
            loadTeachers: 'Teachers/loadTeachers'
        }),
        async saveCourse() {
            const course = {
                ... this.course,
                teacher_id:  window._.get(this, 'course.teacher.id', null),
                doctrine_id:  window._.get(this, 'course.doctrine.id', null)
            }

            delete course.doctrine;
            delete course.teacher;

            if(this.$route.params.id) {
                await safwaAxios.put(`courses/${this.$route.params.id}`, course);
            } else {
                await safwaAxios.post('courses', course);
                this.$router.push({name: 'courses.list'});
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>
