<template>
    <div>
        <vs-button :to="{ name: 'courses.edit', params: { id: params.data.id } }" color="primary" type="filled" class="mr-4">
            {{ $t('general.edit') }}
        </vs-button>

        <vs-button :to="{ name: 'lessons.list', query: { course_id: params.data.id } }" color="success" type="filled">
            {{ $t('general.lessons') }}
        </vs-button>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped></style>
