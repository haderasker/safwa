<template>
    <div class="clearfix">
        <vs-input
            v-validate="'required|min:3'"
            data-vv-validate-on="blur"
            :label-placeholder="$t('register.teacher.inputs.name')"
            name="name"
            :placeholder="$t('register.teacher.inputs.name')"
            v-model="name"
            class="w-full"/>
        <span class="text-danger text-sm">{{ errors.first('name') }}</span>

        <vs-input
            v-validate="'required|email'"
            data-vv-validate-on="blur"
            name="email"
            type="email"
            :label-placeholder="$t('register.teacher.inputs.email')"
            :placeholder="$t('register.teacher.inputs.email')"
            v-model="email"
            class="w-full mt-6"/>
        <span class="text-danger text-sm">{{ errors.first('email') }}</span>

        <vs-input
            ref="password"
            type="password"
            data-vv-validate-on="blur"
            v-validate="'required|min:6'"
            name="password"
            :label-placeholder="$t('register.teacher.inputs.password')"
            :placeholder="$t('register.teacher.inputs.password')"
            v-model="password"
            class="w-full mt-6"/>
        <span class="text-danger text-sm">{{ errors.first('password') }}</span>

        <vs-input
            type="password"
            v-validate="'min:6|confirmed:password'"
            data-vv-validate-on="blur"
            data-vv-as="password"
            name="password_confirmation"
            :label-placeholder="$t('register.teacher.inputs.confirm')"
            :placeholder="$t('register.teacher.inputs.confirm')"
            v-model="password_confirmation"
            class="w-full mt-6"/>
        <span class="text-danger text-sm">{{ errors.first('password_confirmation') }}</span>

        <vs-button type="border" :to="{ name: 'login' }" class="mt-6">
            {{ $t('register.teacher.links.login') }}
        </vs-button>
        <vs-button class="float-right mt-6" @click="registerTeacher" :disabled="!validateForm">
            {{ $t('register.teacher.links.register') }}
        </vs-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.name !== '' && this.email !== '' && this.password !== '' && this.password_confirmation !== ''
        }
    },
    methods: {
        async registerTeacher() {
            if (!this.validateForm) return

            this.$vs.loading()

            this.$store.dispatch('Authentication/register', {
                type: 'teacher',
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
        }
    }
}
</script>
