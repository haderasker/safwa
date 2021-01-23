<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">
                    {{ $route.params.id ? $t('teachers.edit_title') + teacher.name : $t('teachers.create_title') }}
                </h2>
            </div>
        </div>

        <vx-card>
            <h4 class="mb-5">
                {{ $t('teachers.info') }}
            </h4>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('teachers.name') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input class="w-full" v-model="teacher.name"/>
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('teachers.email') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input class="w-full" v-model="teacher.email"/>
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <label for="add_lessons">{{ $t('teachers.add_lesson') }}</label>
                </div>
                <div class="vx-col w-3/4">
                    <vs-checkbox id="add_lessons" v-model="teacher.add_lessons"></vs-checkbox>
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('teachers.description') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-textarea v-model="teacher.description" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('teachers.password') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input class="w-full" v-model="teacher.password"/>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('teachers.password_confirmation') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input class="w-full" v-model="teacher.password_confirmation"/>
                </div>
            </div>

            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-button color="primary" type="filled" @click="addTeacher">
                        {{ $route.params.id ? $t('teachers.update') : $t('teachers.save') }}
                    </vs-button>
                </div>
            </div>
        </vx-card>
    </div>
</template>

<script>
import safwaAxios from "../../../axios";

export default {
    name: 'teacher',
    props: ['teacher'],
    data() {
        return {}
    },
    methods: {
        async addTeacher() {

            if (this.$route.params.id) {
                await safwaAxios.put(`teachers/${this.$route.params.id}`, this.teacher);
            } else {
                await safwaAxios.post('teachers', this.teacher);
                this.$router.push({name: 'teachers.list'}).catch();
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>
