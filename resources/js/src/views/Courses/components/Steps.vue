<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $route.params.id ? $t('courses.edit_title') + course.name : $t('courses.create_title') }}</h2>
            </div>
        </div>

        <vx-card>
            <!-- Avatar Row -->
            <div class="vx-row mb-6">
                <div class="vx-col w-full">
                    <div class="flex items-start flex-col sm:flex-row">
                        <img v-if="course.avatar" :src="course.avatar" class="mr-8 rounded h-24 w-24"
                             alt="avatar"/>
                        <div>
                            <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">
                                {{ $t('courses.avatar') }}
                            </p>

                            <input type="file" class="hidden" ref="update_avatar_input" @change="updateAvatar"
                                   accept="image/*">

                            <vs-button type="border" class="mr-4 mb-4" @click="$refs.update_avatar_input.click()">
                                {{ $t('courses.change_avatar') }}
                            </vs-button>

                            <vs-button type="border" color="danger" @click="removeAvatar()">
                                {{ $t('courses.remove_avatar') }}
                            </vs-button>
                        </div>
                    </div>
                </div>
            </div>

            <vs-divider></vs-divider>

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
                    <span>{{ $t('courses.doctrine') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <v-select :options="listOfDoctrines" v-model="course.doctrine"></v-select>
                </div>
            </div>

            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-button color="primary" type="filled" @click="saveCourse">
                        {{ $route.params.id ? $t('courses.update') : $t('courses.save') }}
                    </vs-button>
                    <vs-button v-if="$route.params.id" color="success" type="filled" @click="lessonsList">
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
    data() {
        return {
        }
    },
    mounted() {
        this.loadTeachers()
        this.loadDoctrines()
    },
    computed: {
        ...mapGetters({
            listOfTeachers: 'Teachers/getTeachers'
        }),
        listOfDoctrines() {
            const doctrines = [
                    {
                        id: 0,
                        label: 'all'
                    },
                ...this.$store.getters['Doctrines/getDoctrines']
            ]

            return doctrines.map(doctrine => {
                const doctrine1 = JSON.parse(JSON.stringify(doctrine))
                doctrine1.label = this.$t(`doctrines.${doctrine.label}`)

                return doctrine1
            })
        },
    },
    methods: {
        ...mapActions({
            loadTeachers: 'Teachers/loadTeachers',
            loadDoctrines: 'Doctrines/loadDoctrines'
        }),
        async saveCourse() {
            const course = {
                ... this.course,
                teacher_id:  window._.get(this, 'course.teacher.id', null),
                doctrine_id: window._.get(this, 'course.doctrine.id', null)
            }

            delete course.teacher;
            delete course.doctrine;

            if(this.$route.params.id) {
                await safwaAxios.put(`courses/${this.$route.params.id}`, course);
            } else {
                await safwaAxios.post('courses', course);
                this.$router.push({name: 'courses.list'}).catch();
            }
        },
        lessonsList() {
            this.$router.push({
                name: 'lessons.list',
                query: {
                    course_id: this.$route.params.id
                }
            }).catch()
        },
        async updateAvatar(event) {
            // show loader
            this.$vs.loading()

            // upload image
            const data = new FormData();
            data.append('image', event.target.files[0]);

            const response = await safwaAxios.post(`media/upload/course/${this.course.id}`, data, {
                headers: {
                    'Content-Type': 'image/png'
                }
            })

            // set it into avatar block
            this.course.avatar = response.data

            // hide loader
            this.$vs.loading.close()

            console.log(this.course)
        },
        async removeAvatar() {
            await safwaAxios.get(`media/remove/course/${this.course.id}`)

            this.course.avatar = ''
        }
    },
}
</script>

<style lang="scss" scoped></style>
