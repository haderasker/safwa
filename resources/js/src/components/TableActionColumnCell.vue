<template>
    <div>
        <router-link :to="{ name: params.routeName, params: { id: params.data.id } }">{{ $t('edit') }}</router-link>
        <a v-if="params.deletableType" href="#" @click.prevent="deleteModel(params.data.id, params.deletableType)">
            {{ $t('delete') }}
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        deleteModel(deletableId, deletableType) {
            console.log({deletableId, deletableType})
        }
    }
}
</script>

<style lang="scss" scoped></style>
