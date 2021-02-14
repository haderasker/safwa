<template>
    <div class="the-navbar__user-meta flex items-center">
        <div class="text-right leading-tight hidden sm:block">
            <p class="font-semibold">{{ activeUserInfo.name | title }}</p>
            <small v-if="roles.length">{{ roles[0] | title }}</small>
        </div>

        <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
            <div class="con-img ml-3">
                <img :src="activeUserInfo.avatar || require('@assets/images/logo/main-logo-white.jpg')" alt="user-img"
                     width="40" height="40" class="rounded-full shadow-md cursor-pointer block"/>
            </div>

            <vs-dropdown-menu class="vx-navbar-dropdown">
                <ul style="min-width: 9rem">

                    <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="toProfilePage">
                        <feather-icon icon="UserIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2">{{ $t('navbar.profile') }}</span>
                    </li>

                    <vs-divider class="m-1"/>

                    <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="logout">
                        <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2">{{ $t('navbar.logout') }}</span>
                    </li>
                </ul>
            </vs-dropdown-menu>
        </vs-dropdown>
    </div>
</template>

<script>
export default {
    computed: {
        activeUserInfo() {
            return this.$store.getters['Authentication/getProfile']
        },
        roles() {
            return this.$store.getters['Authentication/getRoles']
        }
    },
    methods: {
        toProfilePage() {
            this.$router.push({ name: 'me' }).catch(() => {})
        },
        async logout() {
            await this.$store.dispatch('Authentication/logout')
            this.$router.push({ name: 'login' }).catch(() => {})
        }
    }
}
</script>
