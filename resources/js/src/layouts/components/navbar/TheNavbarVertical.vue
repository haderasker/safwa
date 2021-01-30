<template>
    <div class="relative">

        <div class="vx-navbar-wrapper" :class="classObj">
            <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColorLocal" :class="textColor">
                <!-- SM - OPEN SIDEBAR BUTTON -->
                <feather-icon class="sm:inline-flex xl:hidden cursor-pointer p-2" icon="MenuIcon"
                              @click.stop="showSidebar"/>

                <h6>
                    {{ $t('general.current_year') }} : {{ activeUserInfo.current_academic_year }}
                </h6>

                <vs-spacer/>

                <profile-drop-down/>
                <i18n/>

            </vs-navbar>
        </div>
    </div>
</template>

<script>
import I18n from './components/I18n.vue'
import ProfileDropDown from './components/ProfileDropDown.vue'

export default {
    name: 'the-navbar-vertical',
    props: {
        navbarColor: {
            type: String,
            default: '#fff'
        }
    },
    components: {
        ProfileDropDown,
        I18n
    },
    computed: {
        activeUserInfo() {
            return this.$store.getters['Authentication/getProfile']
        },
        navbarColorLocal() {
            return this.$store.state.Default.theme === 'dark' && this.navbarColor === '#fff' ? '#10163a' : this.navbarColor
        },
        verticalNavMenuWidth() {
            return this.$store.state.Default.verticalNavMenuWidth
        },
        textColor() {
            return {'text-white': (this.navbarColor !== '#10163a' && this.$store.state.Default.theme === 'dark') || (this.navbarColor !== '#fff' && this.$store.state.Default.theme !== 'dark')}
        },
        windowWidth() {
            return this.$store.state.Default.windowWidth
        },

        // NAVBAR STYLE
        classObj() {
            if (this.verticalNavMenuWidth === 'default') return 'navbar-default'
            else if (this.verticalNavMenuWidth === 'reduced') return 'navbar-reduced'
            else if (this.verticalNavMenuWidth) return 'navbar-full'
        }
    },
    methods: {
        showSidebar() {
            this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
        }
    }
}
</script>

