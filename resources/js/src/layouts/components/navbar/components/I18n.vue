<template>
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer lang">
        <span class="cursor-pointer flex items-center i18n-locale">
            <img class="h-4 w-5" :src="i18n_locale_img" :alt="$i18n.locale"/>
        </span>

        <vs-dropdown-menu class="w-48 i18n-dropdown vx-navbar-dropdown">
            <vs-dropdown-item @click="updateLocale('en')">
                <img class="h-4 w-5 mr-1" src="@assets/images/flags/en.png" alt="en"/> English
            </vs-dropdown-item>
            <vs-dropdown-item @click="updateLocale('ar')">
                <img class="h-4 w-5 mr-1" src="@assets/images/flags/ar.png" alt="ar"/> Arabic
            </vs-dropdown-item>
        </vs-dropdown-menu>
    </vs-dropdown>
</template>

<script>
export default {
    computed: {
        i18n_locale_img() {
            return require(`@assets/images/flags/${this.$i18n.locale}.png`)
        },
        getCurrentLocaleData() {
            const locale = this.$i18n.locale
            if (locale === 'en') return {flag: 'us', lang: 'English'}
            else if (locale === 'ar') return {flag: 'ar', lang: 'Arabic'}
        }
    },
    methods: {
        updateLocale(locale) {
            this.$i18n.locale = locale
            this.$vs.rtl = locale === 'ar'
        }
    }
}
</script>

<style lang="scss" scoped>
.i18n-locale {
    background: #efefef;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    img {
        margin: auto;
    }
}

//.lang-en { margin: 0 0 0 15px !important; }
.lang { margin: 0 0 0 15px !important; }
</style>
