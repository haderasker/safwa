<template>
    <div>
        <vs-button
            :to="{ name: 'lessons.edit', params: { id: params.data.id } }"
            color="primary"
            class="mr-4"
            type="filled">
            {{ $t('general.edit') }}
        </vs-button>

        <vs-button
            :to="{ name: 'comments.list', query: { model_id: params.data.id, model_type: 'lesson' } }"
            color="success"
            class="mr-4"
            type="filled">
            {{ $t('general.comments') }}
        </vs-button>

        <vs-button color="danger" type="filled" @click="deleteModel">
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
            await safwaAxios.delete(`lessons/${this.params.data.id}`)
            this.params.api.purgeServerSideCache([])
        }
    }
}
</script>

<style lang="scss" scoped></style>
