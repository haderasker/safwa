<template>
    <div>
        <vs-button :to="{name: 'results.list', query: { exam_id: params.data.id }}" color="primary" type="filled" class="mr-4">
            {{ $t('general.results') }}
        </vs-button>
        <vs-button @click="deleteModel" color="danger" type="filled">
            {{ $t('general.delete') }}
        </vs-button>
    </div>
</template>

<script>
import safwaAxios from "../../../axios";

export default {
    methods: {
        async deleteModel() {
            await safwaAxios.delete(`exams/${this.params.data.id}`)
            this.params.api.purgeServerSideCache([])
        },
    }
}
</script>

<style lang="scss" scoped></style>
