<template>
    <div>
        <vs-button :to="{name: 'student-result.profile', params: { id: params.data.id }}" color="primary" type="filled" class="mr-4">
            {{ $t('general.score_details') }}
        </vs-button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
