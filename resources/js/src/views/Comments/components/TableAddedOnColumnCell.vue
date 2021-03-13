<template>
    <router-link :to="{ name: base, params: { id:  params.data.commentable_id } }">
        {{ params.data.commentable.label }}
    </router-link>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        base() {
            switch (this.params.data.commentable_type) {
                case 'App\\Models\\Lesson':
                    return 'lessons.edit'
                case 'App\\Models\\Course':
                    return 'courses.edit'
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
