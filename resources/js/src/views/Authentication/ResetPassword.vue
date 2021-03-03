<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@assets/images/pages/reset-password.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">
                                        {{ $t('reset_password.title') }}
                                    </h4>
                                    <p>
                                        {{ $t('reset_password.sub_title') }}
                                    </p>
                                </div>
                                <vs-input type="email" :label-placeholder="$t('reset_password.inputs.email')"
                                          v-model="email"
                                          class="w-full mb-6"/>
                                <vs-input type="password" :label-placeholder="$t('reset_password.inputs.password')"
                                          v-model="password"
                                          class="w-full mb-6"/>
                                <vs-input type="password" :label-placeholder="$t('reset_password.inputs.confirm')"
                                          v-model="confirmPassword"
                                          class="w-full mb-8"/>

                                <div class="flex flex-wrap justify-between flex-col-reverse sm:flex-row">
                                    <vs-button type="border" :to="{ name: 'login' }"
                                               class="w-full sm:w-auto mb-8 sm:mb-auto mt-3 sm:mt-auto">
                                        {{ $t('reset_password.links.login') }}
                                    </vs-button>
                                    <vs-button @click="reset" class="w-full sm:w-auto">
                                        {{ $t('reset_password.links.reset') }}
                                    </vs-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: this.$route.query.email || '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        async reset() {
            try {
                await this.$store.dispatch('Authentication/resetPassword', {
                    token: this.$route.query.token || this.$route.query['amp;token'] || '',
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.confirmPassword
                })

                this.$router.push({name: 'dashboard'}).catch()
            } catch(error) {
                this.$vs.notify({
                    title: this.$t('general.error_title'),
                    text: error.response.status === 422 ? this.$t('reset_password.failed_auth_message') : error.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                })
            }
        }
    }
}
</script>
