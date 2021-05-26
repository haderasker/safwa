<template>
    <div>
        <vs-button :to="{ name: 'teachers.edit', params: { id: params.data.id } }" color="primary" type="filled" class="mr-4">
            {{ $t('general.edit') }}
        </vs-button>

        <vs-button @click="blockModel" :color="params.data.status === 1 ? 'warning' : 'success'" type="filled">
            {{ params.data.status === 1 ? $t('general.block') : $t('general.active') }}
        </vs-button>

        <vs-button @click="deleteModel" color="danger" type="filled">
            {{ $t('general.delete.button') }}
        </vs-button>
    </div>
</template>

<script>
import safwaAxios from "../../../axios";

export default {
    methods: {
        async deleteModel() {
            this.confirm(
                this.$t('general.delete.title'),
                this.$t('general.delete.message'),
                this.delete
            )
        },

        async delete() {
            await safwaAxios.delete(`teachers/${this.params.data.id}`)
            this.params.api.purgeServerSideCache([])
        },

        async blockModel() {
            await safwaAxios.get(`teachers/block/${this.params.data.id}`)
            this.params.api.purgeServerSideCache([])
        }
    }
}
</script>

<style lang="scss" scoped></style>
