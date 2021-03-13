<template>
    <span v-if="role === 'admin'">
        {{ params.data.author.name }}
    </span>
    <router-link v-else :to="{ name: base, params: { id: params.data.author.id } }">
        {{ params.data.author.name }}
    </router-link>
</template>

<script>
export default {
    computed: {
        role() {
            return window._.get(this, 'params.data.author.roles[0].name')
        },
        base() {
            switch (this.role) {
                case 'student':
                    return 'students.edit'
                case 'teacher':
                    return 'teachers.edit'
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
