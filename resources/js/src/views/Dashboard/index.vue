<template>
    <div>
        <admin v-if="$hasRole('admin')"></admin>
        <teacher v-if="$hasRole('teacher')"></teacher>
        <student v-if="$hasRole('student')"></student>
    </div>
</template>

<script>
import Admin from "./Admin";
import Student from "./Student";
import Teacher from "./Teacher";
export default {
    components: {
        Admin,
        Student,
        Teacher
    },
    mounted() {
        this.showUpdateNotify()
    },
    methods: {
        showUpdateNotify() {
            if(this.$route.query.profile_updated) {
                this.$vs.notify({
                    title: this.$t('general.success_title'),
                    text: this.$t('profile.update_success'),
                    iconPack: 'feather',
                    icon: 'icon-thumbs-up',
                    color: 'success'
                })
            }
        }
    }
}
</script>
