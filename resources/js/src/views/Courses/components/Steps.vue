<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $route.params.id ? $t('courses.edit_title') + course.name : $t('courses.create_title') }}</h2>
            </div>
        </div>

        <vx-card class="mb-6">
            <!-- Avatar Row -->
            <div v-if="$route.params.id" class="vx-row mb-6">
                <div class="vx-col w-full">
                    <div class="flex items-start flex-col sm:flex-row">
                        <img v-if="course.media.length" :src="$getUrl(course.media[0])" class="mr-8 rounded h-24 w-24"
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

            <vs-divider v-if="$route.params.id"></vs-divider>

            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('courses.course_name') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input class="w-full" :placeholder="$t('courses.course_name')" v-model="course.name" name="name" v-validate="'required|min:3'"/>
                    <span class="text-danger text-sm">{{ errors.first('name') }}</span>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('courses.teacher_name') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <v-select label="name" :options="listOfTeachers" v-model="course.teacher" name="teacher" v-validate="'required'"></v-select>
                    <span class="text-danger text-sm">{{ errors.first('teacher') }}</span>
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
                    <v-select :options="listOfDoctrines" v-model="course.doctrine" name="doctrine" v-validate="'required'"></v-select>
                    <span class="text-danger text-sm">{{ errors.first('doctrine') }}</span>
                </div>
            </div>

            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-button color="primary" type="filled" @click="saveCourse" :disabled="!validateForm">
                        {{ $route.params.id ? $t('courses.update') : $t('courses.save') }}
                    </vs-button>
                    <vs-button v-if="$route.params.id" color="success" type="filled" @click="lessonsList">
                        {{ $t('courses.lessons_list') }}
                    </vs-button>
                </div>
            </div>
        </vx-card>

        <vx-card v-if="$route.params.id">
            <div class="vx-row w-full">
                <div class="vx-col w-1/4">
                    <span>{{ $t('courses.extra_score') }}</span>
                </div>
                <div class="vx-col w-1/2">
                    <vs-input class="w-full" type="number" v-model="extra_score"/>
                </div>
                <div class="vx-col w-1/4">
                    <vs-button color="primary" type="filled" @click="addExtraScore">
                        {{ $t('courses.save') }}
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
            extra_score: 0
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
        validateForm() {
            return !this.errors.any()
        },
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
            await this.$validator.validate()

            if (this.errors.any()) {
                return
            }

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
            this.course.media = [response.data]

            // hide loader
            this.$vs.loading.close()
        },
        async removeAvatar() {
            await safwaAxios.get(`media/remove/course/${this.course.id}`)

            this.course.media = []
        },
        async addExtraScore() {
            await safwaAxios.post(`courses/${this.$route.params.id}/extra_score`, {
                score: this.extra_score
            });

            this.successMessage({
                title: this.$t('courses.extra_success_title'),
                message: this.$t('courses.extra_success_message')
            })
        }
    },
}
</script>

<style lang="scss" scoped></style>
