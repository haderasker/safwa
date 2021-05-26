<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@assets/images/pages/forgot-password.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">
                                        {{ $t('forget_password.title') }}
                                    </h4>
                                    <p>
                                        {{ $t('forget_password.sub_title') }}
                                    </p>
                                </div>

                                <vs-input type="email" :label-placeholder="$t('forget_password.email')" v-model="email"
                                          class="w-full mb-8"/>
                                <vs-button type="border" :to="{ name: 'login' }" class="px-4 w-full md:w-auto">
                                    {{ $t('forget_password.links.login') }}
                                </vs-button>
                                <vs-button @click="recover"
                                           class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0">
                                    {{ $t('forget_password.links.recover') }}
                                </vs-button>
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
            email: ''
        }
    },
    methods: {
        async recover() {
            try {
                await this.$store.dispatch('Authentication/forgetPassword', {
                    email: this.email
                })

                this.$vs.notify({
                    title: this.$t('general.success_title'),
                    text: this.$t('forget_password.reset_success'),
                    iconPack: 'feather',
                    icon: 'icon-thumbs-up',
                    color: 'success'
                })

                this.$router.push({name: 'login'}).catch()
            } catch (error) {
                const key = error.response.data.errors.email[0].replace(/[^a-zA-Z ]/g, "").replaceAll(' ', '_').toLowerCase()

                this.$vs.notify({
                    title: this.$t('general.error_title'),
                    text: error.response.status === 422 ? this.$t(`forget_password.${key}`) : error.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                })
            }
        }
    }
}
</script>
