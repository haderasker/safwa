<template>
    <div>
        <vs-button :to="{name: 'results.list', query: { exam_id: params.data.id }}" color="primary" type="filled" class="mr-4">
            {{ $t('general.results') }}
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
            await safwaAxios.delete(`exams/${this.params.data.id}`)
            this.params.api.purgeServerSideCache([])
        },
    }
}
</script>

<style lang="scss" scoped></style>
