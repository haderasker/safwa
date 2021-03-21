<template>

    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('profile.title') }} ({{ profile.name }})</h2>
            </div>
        </div>

        <vx-card>
            <div class="px-6 pt-6">
                <!-- Avatar Row -->
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <div class="flex items-start flex-col sm:flex-row">
                            <img v-if="profile.media && profile.media.length" :src="$getUrl(profile.media[0])"
                                 class="mr-8 rounded h-24 w-24"
                                 alt="avatar"/>
                        </div>
                    </div>
                </div>

                <vs-divider v-if="profile.media && profile.media.length"></vs-divider>

                <!-- Content Row -->
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <h4>{{ $t('profile.main_info') }}</h4>
                    </div>

                    <div class="vx-col md:w-1/2 w-full">
                        <vs-input disabled class="w-full mt-4" :label="$t('profile.inputs.name')"
                                  v-model="profile.name"/>

                        <vs-input disabled class="w-full mt-4" :label="$t('profile.inputs.email')"
                                  v-model="profile.email"/>

                        <vs-input disabled class="w-full mt-4" :label="$t('profile.inputs.address')"
                                  v-model="profile.address"/>

                        <vs-input disabled class="w-full mt-4" :label="$t('profile.inputs.job')" v-model="profile.job"/>

                        <vs-input disabled class="w-full mt-4" :label="$t('profile.inputs.national_number')"
                                  v-model="profile.national_number"/>

                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.nationality') }}
                            </label>
                            <div>
                                <vs-input disabled class="w-full" v-model="profile.nationality"/>
                            </div>
                        </div>

                        <vs-input disabled class="w-full mt-4" :label="$t('profile.inputs.phone')"
                                  v-model="profile.phone"/>

                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.birth_date') }}
                            </label>
                            <div>
                                <vs-input disabled class="w-full" v-model="profile.birth_date"/>
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.about_me') }}
                            </label>
                            <div>
                                <vs-textarea disabled class="w-full" v-model="profile.about_me"/>
                            </div>
                        </div>
                    </div>

                    <div class="vx-col md:w-1/2 w-full">
                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.gender.title') }}
                            </label>
                            <div>
                                <vs-input disabled class="w-full" v-model="profile.gender"/>
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.religion.title') }}
                            </label>
                            <div>
                                <vs-input disabled class="w-full" v-model="profile.religion"/>
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.quran_level') }}
                            </label>
                            <div>
                                <vs-input disabled class="w-full" v-model="profile.quran_level"/>
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.language.title') }}
                            </label>
                            <div>
                                <vs-input disabled class="w-full" v-model="profile.language"/>
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.doctrine') }}
                            </label>
                            <div>
                                <vs-input disabled class="w-full" v-model="profile.doctrine"/>
                            </div>
                        </div>

                        <vs-input disabled class="w-full mt-4" :label="$t('profile.inputs.qualification')"
                                  v-model="profile.qualification"/>

                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.country') }}
                            </label>
                            <div>
                                <vs-input disabled class="w-full" v-model="profile.country"/>
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <label class="text-sm">
                                {{ $t('profile.inputs.ar_level.title') }}
                            </label>
                            <div>
                                <vs-input disabled class="w-full" v-model="profile.ar_level"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </vx-card>
    </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import safwaAxios from "../../axios";

export default {
    data() {
        return {
            profile: {
                media: []
            }
        }
    },
    mounted() {
        this.translateProfile()
    },
    methods: {
        async translateProfile() {
            const {data: profile} = await safwaAxios.get(`students/${this.$route.params.id}/show`)

            if (profile.doctrine) {
                profile.doctrine = this.$t(`doctrines.${profile.doctrine.label}`)
            }

            if (profile.country) {
                profile.country = this.$t(`countries.${profile.country}`)
            }

            if (profile.nationality) {
                profile.nationality = this.$t(`countries.${profile.nationality}`)
            }

            if (profile.quran_level) {
                profile.quran_level = `${this.$t('general.quran_part')} ${profile.quran_level}`
            }

            if (profile.gender) {
                profile.gender = this.$t(`profile.inputs.gender.${profile.gender}`)
            }

            if (profile.religion) {
                profile.religion = this.$t(`profile.inputs.religion.${profile.religion}`)
            }

            if (profile.language) {
                profile.language = this.$t(`profile.inputs.language.${profile.language}`)
            }

            if (profile.ar_level) {
                profile.ar_level = this.$t(`profile.inputs.ar_level.${profile.ar_level}`)
            }

            this.profile = profile
        },
    }
}
</script>

<style lang="scss" scoped></style>
