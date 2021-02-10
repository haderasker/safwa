<template>
    <div>
        <router-link :to="{ name: params.routeName, params: { id: params.data.id } }">{{ $t('general.exam_results') }}</router-link>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
