<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">
                    {{ $route.params.id ? $t('students.edit_title') + student.name : $t('students.create_title') }}
                </h2>
            </div>
        </div>

        <vx-card>
            <h4 class="mb-5">
                {{ $t('students.info') }}
            </h4>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('students.name') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input class="w-full" v-model="student.name"/>
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('students.email') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input class="w-full" v-model="student.email"/>
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('students.status') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <v-select
                        class="w-full"
                        label="name"
                        :options="getStatus"
                        v-model="student.status"></v-select>
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('students.password') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vx-input-group class="w-full">
                        <vs-input v-model="student.password"/>
                        <template slot="append">
                            <div class="append-text bg-primary">
                                <vs-button @click="generatePassword()">Generate</vs-button>
                            </div>
                        </template>
                    </vx-input-group>
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col w-1/4">
                    <span>{{ $t('students.password_confirmation') }}</span>
                </div>
                <div class="vx-col w-3/4">
                    <vs-input class="w-full" v-model="student.password_confirmation"/>
                </div>
            </div>

            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-button color="primary" type="filled" @click="createStudent">
                        {{ $route.params.id ? $t('students.update') : $t('students.save') }}
                    </vs-button>
                </div>
            </div>
        </vx-card>
    </div>
</template>

<script>
import safwaAxios from "../../../axios";

export default {
    props: ['student'],
    data() {
        return {
            characters: 'a-z,A-Z,0-9,#',
            size: 16
        }
    },
    computed: {
        getStatus() {
            const allStatus = [1, 2, 3]

            return allStatus.map(status => {
                return {
                    id: status,
                    name: this.$t(`status.${status}`)
                }
            })
        }
    },
    methods: {
        generatePassword() {
            let charactersArray = this.characters.split(',');
            let CharacterSet = '';
            let password = '';

            if (charactersArray.indexOf('a-z') >= 0) {
                CharacterSet += 'abcdefghijklmnopqrstuvwxyz';
            }
            if (charactersArray.indexOf('A-Z') >= 0) {
                CharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            if (charactersArray.indexOf('0-9') >= 0) {
                CharacterSet += '0123456789';
            }
            if (charactersArray.indexOf('#') >= 0) {
                CharacterSet += '![]{}()%&*$#^<>~@|';
            }

            for (let i = 0; i < this.size; i++) {
                password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
            }

            this.student.password = password;
            this.student.password_confirmation = password;
        },
        async createStudent() {
            const student = Object.assign({}, this.student)

            if (student.status) {
                student.status = student.status.id
            }

            if (this.$route.params.id) {
                await safwaAxios.put(`students/${this.$route.params.id}`, student);
            } else {
                await safwaAxios.post('students', this.student);
                this.$router.push({name: 'students.list'}).catch();
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>
