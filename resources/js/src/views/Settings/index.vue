<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('settings.title') }}</h2>
            </div>
        </div>

        <vx-card :title="$t('settings.register_period.title')">
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>{{ $t('settings.register_period.from') }}</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <datepicker :format="dateFormat" v-model="settings.registration_period_from"></datepicker>
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>{{ $t('settings.register_period.to') }}</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <datepicker :format="dateFormat" v-model="settings.registration_period_to"></datepicker>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col sm:w-2/3 w-full ml-auto">
                    <vs-button class="mr-3 mb-2" @click="saveRegisterPeriod">{{ $t('settings.save') }}</vs-button>
                </div>
            </div>
        </vx-card>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import safwaAxios from "../../axios";

export default {
    components: {
        Datepicker
    },
    data() {
        return {
            dateFormat: 'yyyy-MM-dd',
            settings: {
                registration_period_from: null,
                registration_period_to: null
            }
        }
    },
    created() {
        this.loadSettings()
    },
    methods: {
        async saveRegisterPeriod() {
            // save
            await safwaAxios.post('settings/set', this.settings)
        },
        async loadSettings() {
            const response = await safwaAxios.post('/settings/fetch', {
                keys: [
                    'registration_period_from',
                    'registration_period_to'
                ]
            })

            response.data.forEach(item => {
                this.settings[item.key] = new Date(this.$moment(item.value))
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>
