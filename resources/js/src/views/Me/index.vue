<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('profile.title') }}</h2>
            </div>
        </div>

        <vx-card>
            <div class="px-6 pt-6">
                <vs-alert icon-pack="feather" icon="icon-info" color="warning" class="mb-6"
                          :active="userIsReady">
                    {{ $t('profile.fill_content') }}
                </vs-alert>

                <!-- Avatar Row -->
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <div class="flex items-start flex-col sm:flex-row">
                            <img v-if="profile.avatar" :src="profile.avatar" class="mr-8 rounded h-24 w-24"
                                 alt="avatar"/>
                            <div>
                                <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">
                                    {{ $t('profile.avatar') }}
                                </p>

                                <input type="file" class="hidden" ref="update_avatar_input" @change="updateAvatar"
                                       accept="image/*">

                                <vs-button type="border" class="mr-4 mb-4" @click="$refs.update_avatar_input.click()">
                                    {{ $t('profile.change_avatar') }}
                                </vs-button>

                                <vs-button type="border" color="danger" @click="removeAvatar()">
                                    {{ $t('profile.remove_avatar') }}
                                </vs-button>
                            </div>
                        </div>
                    </div>
                </div>

                <vs-divider></vs-divider>

                <!-- Content Row -->
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <h4>{{ $t('profile.main_info') }}</h4>
                    </div>

                    <div class="vx-col md:w-1/2 w-full">
                        <vs-input class="w-full mt-4" :label="$t('profile.inputs.name')" v-model="profile.name"
                                  v-validate="'required'"
                                  name="username"/>
                        <span class="text-danger text-sm" v-show="errors.has('name')">
                            {{ errors.first('name') }}
                        </span>

                        <vs-input class="w-full mt-4" :label="$t('profile.inputs.email')" v-model="profile.email"
                                  type="email"
                                  v-validate="'required|email'" name="email"/>
                        <span class="text-danger text-sm" v-show="errors.has('email')">
                            {{ errors.first('email') }}
                        </span>

                        <vs-input v-if="$hasAnyRole('student', 'teacher')" class="w-full mt-4"
                                  :label="$t('profile.inputs.address')" v-model="profile.address"
                                  v-validate="'required'"
                                  name="address"/>
                        <span v-if="$hasAnyRole('student', 'teacher')" class="text-danger text-sm"
                              v-show="errors.has('address')">
                            {{ errors.first('address') }}
                        </span>

                        <vs-input v-if="$hasAnyRole('student')" class="w-full mt-4" :label="$t('profile.inputs.job')"
                                  v-model="profile.job"
                                  v-validate="'required'"
                                  name="job"/>
                        <span v-if="$hasAnyRole('student')" class="text-danger text-sm" v-show="errors.has('job')">
                            {{ errors.first('job') }}
                        </span>

                        <vs-input v-if="$hasAnyRole('student')" class="w-full mt-4"
                                  :label="$t('profile.inputs.national_number')"
                                  v-model="profile.national_number"
                                  v-validate="{regex: '^([0-9]+)$' }"
                                  name="national_number"/>
                        <span v-if="$hasAnyRole('student')" class="text-danger text-sm"
                              v-show="errors.has('national_number')">
                            {{ errors.first('national_number') }}
                        </span>

                        <div v-if="$hasAnyRole('student')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.nationality') }}
                            </label>
                            <div>
                                <v-select
                                    name="nationality"
                                    class="w-full"
                                    :options="translatedCountries"
                                    v-model="profile.nationality"
                                    v-validate="'required'"></v-select>
                                <span class="text-danger text-sm" v-show="errors.has('nationality')">
                                    {{ errors.first('nationality') }}
                                </span>
                            </div>
                        </div>

                        <vs-input v-if="$hasAnyRole('student', 'teacher')" class="w-full mt-4"
                                  :label="$t('profile.inputs.phone')" v-model="profile.phone"
                                  v-validate="{regex: '^\\+?([0-9]+)$' }"
                                  name="phone"/>
                        <span v-if="$hasAnyRole('student', 'teacher')" class="text-danger text-sm"
                              v-show="errors.has('phone')">
                            {{ errors.first('phone') }}
                        </span>

                        <div v-if="$hasAnyRole('student', 'teacher')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.birth_date') }}
                            </label>
                            <div class="">
                                <flat-pickr v-model="profile.birth_date"
                                            :config="{ dateFormat: 'Y-m-d', maxDate: new Date() }"
                                            class="w-full" v-validate="'required'" name="birth_date"/>

                                <span class="text-danger text-sm" v-show="errors.has('birth_date')">
                                {{ errors.first('birth_date') }}
                            </span>
                            </div>
                        </div>

                        <div v-if="$hasAnyRole('student', 'teacher')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.about_me') }}
                            </label>
                            <div>
                                <vs-textarea class="w-full" v-model="profile.about_me" v-validate="'required'"
                                             name="about_me"/>

                                <span class="text-danger text-sm" v-show="errors.has('about_me')">
                                {{ errors.first('about_me') }}
                            </span>
                            </div>
                        </div>
                    </div>

                    <div class="vx-col md:w-1/2 w-full">
                        <div v-if="$hasAnyRole('student', 'teacher')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.gender.title') }}
                            </label>
                            <div class="mt-4">
                                <vs-radio v-model="profile.gender" vs-value="male" class="mr-4">
                                    {{ $t('profile.inputs.gender.male') }}
                                </vs-radio>
                                <vs-radio v-model="profile.gender" vs-value="female" class="mr-4">
                                    {{ $t('profile.inputs.gender.female') }}
                                </vs-radio>

                                <span class="text-danger text-sm" v-show="errors.has('gender')">
                                {{ errors.first('gender') }}
                            </span>
                            </div>
                        </div>

                        <div v-if="$hasAnyRole('student')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.religion.title') }}
                            </label>
                            <div class="mt-4">
                                <vs-radio v-model="profile.religion" vs-value="muslim" class="mr-4">
                                    {{ $t('profile.inputs.religion.muslim') }}
                                </vs-radio>
                                <vs-radio v-model="profile.religion" vs-value="other" class="mr-4">
                                    {{ $t('profile.inputs.religion.other') }}
                                </vs-radio>

                                <span class="text-danger text-sm" v-show="errors.has('religion')">
                                    {{ errors.first('religion') }}
                                </span>
                            </div>
                        </div>

                        <div v-if="$hasAnyRole('student')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.quran_level') }}
                            </label>
                            <div>
                                <v-select
                                    name="quran_level"
                                    class="w-full"
                                    :options="translatedQuranParts"
                                    v-model="profile.quran_level"
                                    v-validate="'required'"></v-select>

                                <span class="text-danger text-sm" v-show="errors.has('quran_level')">
                                    {{ errors.first('quran_level') }}
                                </span>
                            </div>
                        </div>

                        <div v-if="$hasAnyRole('student')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.language.title') }}
                            </label>
                            <div class="mt-4">
                                <vs-radio v-model="profile.language" vs-value="arabic" class="mr-4">
                                    {{ $t('profile.inputs.language.arabic') }}
                                </vs-radio>
                                <vs-radio v-model="profile.language" vs-value="english" class="mr-4">
                                    {{ $t('profile.inputs.language.english') }}
                                </vs-radio>

                                <span class="text-danger text-sm" v-show="errors.has('language')">
                                    {{ errors.first('language') }}
                                </span>
                            </div>
                        </div>

                        <div v-if="$hasAnyRole('student')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.doctrine') }}
                            </label>
                            <div>
                                <v-select
                                    name="doctrine"
                                    class="w-full"
                                    :options="translatedDoctrines"
                                    v-model="profile.doctrine"
                                    v-validate="'required'"></v-select>
                                <span class="text-danger text-sm" v-show="errors.has('doctrine')">
                                    {{ errors.first('doctrine') }}
                                </span>
                            </div>
                        </div>

                        <vs-input v-if="$hasAnyRole('student')" class="w-full mt-4"
                                  :label="$t('profile.inputs.qualification')"
                                  v-model="profile.qualification"
                                  v-validate="'required'"
                                  name="qualification"/>
                        <span v-if="$hasAnyRole('student')" class="text-danger text-sm"
                              v-show="errors.has('qualification')">
                            {{ errors.first('qualification') }}
                        </span>

                        <div v-if="$hasAnyRole('student')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.country') }}
                            </label>
                            <div>
                                <v-select
                                    name="country"
                                    class="w-full"
                                    :options="translatedCountries"
                                    v-model="profile.country"
                                    v-validate="'required'"></v-select>
                                <span class="text-danger text-sm" v-show="errors.has('country')">
                                {{ errors.first('country') }}
                            </span>
                            </div>
                        </div>

                        <div v-if="$hasAnyRole('student')" class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.ar_level.title') }}
                            </label>
                            <div class="mt-4">
                                <vs-radio v-model="profile.ar_level" vs-value="beginner" class="mr-4">
                                    {{ $t('profile.inputs.ar_level.beginner') }}
                                </vs-radio>
                                <vs-radio v-model="profile.ar_level" vs-value="intermediate" class="mr-4">
                                    {{ $t('profile.inputs.ar_level.intermediate') }}
                                </vs-radio>
                                <vs-radio v-model="profile.ar_level" vs-value="advanced" class="mr-4">
                                    {{ $t('profile.inputs.ar_level.advanced') }}
                                </vs-radio>

                                <span class="text-danger text-sm" v-show="errors.has('ar_level')">
                                    {{ errors.first('ar_level') }}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                <vs-divider></vs-divider>

                <!-- Change Password -->
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <h4>{{ $t('profile.change_password') }}</h4>
                    </div>
                    <div class="vx-col md:w-1/2 w-full">
                        <vs-input
                            class="w-full mt-4"
                            :label="$t('profile.inputs.password')"
                            v-model="profile.password"
                            v-validate="'min:6'"
                            name="password"/>
                        <span class="text-danger text-sm" v-show="errors.has('password')">
                            {{ errors.first('password') }}
                        </span>
                    </div>

                    <div class="vx-col md:w-1/2 w-full">
                        <vs-input
                            class="w-full mt-4"
                            :label="$t('profile.inputs.password_confirmation')"
                            v-model="profile.password_confirmation"
                            v-validate="'min:6'"
                            name="password_confirmation"/>
                        <span class="text-danger text-sm" v-show="errors.has('password_confirmation')">
                            {{ errors.first('password_confirmation') }}
                        </span>
                    </div>
                </div>

                <vs-divider></vs-divider>

                <!-- Save Button -->
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <div class="mt-8 flex flex-wrap items-center justify-end">
                            <vs-button class="ml-auto mt-2" @click="save">
                                {{ $t('profile.save') }}
                            </vs-button>
                        </div>
                    </div>
                </div>
            </div>
        </vx-card>
    </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import safwaAxios from "../../axios";
import {mapActions, mapGetters} from "vuex";

export default {
    components: {
        flatPickr
    },
    data() {
        return {
            profile: {}
        }
    },
    mounted() {
        this.loadDoctrines()
        this.profile = this.translateProfile()
    },
    computed: {
        ...mapGetters({
            doctrines: 'Doctrines/getDoctrines'
        }),
        userIsReady() {
            return this.$hasRole('student') && !this.profile.doctrine_id
        },
        translatedDoctrines() {
            return this.doctrines.map(doctrine => {
                const doctrine1 = JSON.parse(JSON.stringify(doctrine))
                doctrine1.label = this.$t(`doctrines.${doctrine.label}`)

                return doctrine1
            })
        },
        translatedCountries() {
            const countries = require(`../../i18n/lang/${this.$i18n.locale}/countries.json`)
            const mapped = []

            for (const code in countries) {
                mapped.push({
                    label: countries[code],
                    code: code
                })
            }

            return mapped
        },
        translatedQuranParts() {
            const parts = 30
            const translations = []

            for (let i = 1; i <= parts; i++) {
                translations.push({
                    label: `${this.$t('general.quran_part')} ${i}`,
                    part: i
                })
            }

            return translations
        }
    },
    methods: {
        ...mapActions({
            loadDoctrines: 'Doctrines/loadDoctrines'
        }),
        translateProfile() {
            const profile = JSON.parse(JSON.stringify(this.$store.getters['Authentication/getProfile']))

            if (profile.doctrine) {
                profile.doctrine.label = this.$t(`doctrines.${profile.doctrine.label}`)
            }

            if (profile.country) {
                profile.country = {
                    label: this.$t(`countries.${profile.country}`),
                    code: profile.country
                }
            }

            if (profile.nationality) {
                profile.nationality = {
                    label: this.$t(`countries.${profile.nationality}`),
                    code: profile.nationality
                }
            }

            if (profile.quran_level) {
                profile.quran_level = {
                    label: `${this.$t('general.quran_part')} ${profile.quran_level}`,
                    part: profile.quran_level
                }
            }

            return profile
        },
        async updateAvatar(event) {
            // show loader
            this.$vs.loading()

            // upload image
            const data = new FormData();
            data.append('image', event.target.files[0]);

            const response = await safwaAxios.post(`media/upload/user/${this.profile.id}`, data, {
                headers: {
                    'Content-Type': 'image/png'
                }
            })

            // set it into avatar block
            this.profile.avatar = response.data

            // hide loader
            this.$vs.loading.close()
        },
        async removeAvatar() {
            await safwaAxios.get(`media/remove/user/${this.profile.id}`)

            this.profile.avatar = ''
        },
        async save() {
            // validate
            await this.$validator.validate()
            console.log(this.$validator.errors)
            if (this.$validator.errors.any()) {
                return
            }

            const profile = {
                ...JSON.parse(JSON.stringify(this.profile)),
                doctrine_id: this.profile.doctrine.id || null,
                country: this.profile.country.code || null,
                nationality: this.profile.nationality.code || null,
                quran_level: this.profile.quran_level.part
            }

            await safwaAxios.post('profile', profile)

            window.location.reload()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
