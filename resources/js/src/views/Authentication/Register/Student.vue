<template>
    <div class="clearfix">
        <template v-if="!openRegistration">
            <vs-alert color="warning">
                {{ $t('register.student.no_registration') }}
            </vs-alert>
        </template>
        <template v-else>
            <vs-input
                v-validate="'required|min:3'"
                data-vv-validate-on="blur"
                :label-placeholder="$t('register.student.inputs.name')"
                name="name"
                :placeholder="$t('register.student.inputs.name')"
                v-model="name"
                class="w-full"/>
            <span class="text-danger text-sm">{{ errors.first('name') }}</span>

            <vs-input
                v-validate="'required|email'"
                data-vv-validate-on="blur"
                name="email"
                type="email"
                :label-placeholder="$t('register.student.inputs.email')"
                :placeholder="$t('register.student.inputs.email')"
                v-model="email"
                class="w-full mt-6"/>
            <span class="text-danger text-sm">{{ errors.first('email') }}</span>

            <vs-input
                ref="password"
                type="password"
                data-vv-validate-on="blur"
                v-validate="'required|min:6'"
                name="password"
                :label-placeholder="$t('register.student.inputs.password')"
                :placeholder="$t('register.student.inputs.password')"
                v-model="password"
                class="w-full mt-6"/>
            <span class="text-danger text-sm">{{ errors.first('password') }}</span>

            <vs-input
                type="password"
                v-validate="'min:6|confirmed:password'"
                data-vv-validate-on="blur"
                data-vv-as="password"
                name="password_confirmation"
                :label-placeholder="$t('register.student.inputs.confirm')"
                :placeholder="$t('register.student.inputs.confirm')"
                v-model="password_confirmation"
                class="w-full mt-6"/>
            <span class="text-danger text-sm">{{ errors.first('password_confirmation') }}</span>
        </template>

        <vs-button type="border" :to="{ name: 'login' }" class="mt-6">
            {{ $t('register.student.links.login') }}
        </vs-button>
        <vs-button v-if="openRegistration" class="float-right mt-6" @click="registerStudent" :disabled="!validateForm">
            {{ $t('register.student.links.register') }}
        </vs-button>
    </div>
</template>

<script>
import safwaAxios from "../../../axios";

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            openRegistration: false
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.name !== '' && this.email !== '' && this.password !== '' && this.password_confirmation !== ''
        }
    },
    created() {
        this.getRegistrationPeriod()
    },
    methods: {
        async registerStudent() {
            if (!this.validateForm) return

            this.$vs.loading()

            this.$store.dispatch('Authentication/register', {
                type: 'student',
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
                .then(res => {
                    this.$router.push({name: 'dashboard'}).catch(() => {
                    })
                })
                .catch(err => {
                    this.$setLaravelValidationErrorsFromResponse(err.response.data);
                })
                .finally(() => {
                    this.$vs.loading.close()
                })
        },
        async getRegistrationPeriod() {
            const response = await safwaAxios.post('/settings/fetch', {
                keys: [
                    'registration_period_from',
                    'registration_period_to',
                ]
            })
            const dates = {}

            response.data.forEach(item => {
                dates[item.key] = this.$moment(item.value).unix()
            })

            const now = this.$moment().unix()

            if (now >= dates.registration_period_from && now <= dates.registration_period_to) {
                this.openRegistration = true
            }
        }
    }
}
</script>
