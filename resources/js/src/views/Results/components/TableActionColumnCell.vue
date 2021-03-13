<template>
    <div>
        <vs-button color="primary" type="filled" @click="params.context.showEditResult(params.data.id)">
            {{ $t('general.edit') }}
        </vs-button>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped></style>
