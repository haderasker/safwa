<template>
    <div>
        <vs-button
            color="primary"
            type="filled"
            @click="params.context.showPopup(params.data.id, params.data.body, 0, params.data.commentable_id, params.data.commentable_type, $t('comments.edit_comment'))">
            {{ $t('general.edit') }}
        </vs-button>

        <vs-button
            color="success"
            type="filled"
            @click="params.context.showPopup(null, '', params.data.id, params.data.commentable_id, params.data.commentable_type, $t('comments.replay_to_comment'))">
            {{ $t('general.replay') }}
        </vs-button>

        <vs-button @click="toogleApprove" :color="params.data.approved_at ? 'warning' : 'success'" type="filled">
            {{ params.data.approved_at ? $t('general.disapprove') : $t('general.approve') }}
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
            await safwaAxios.delete(`comments/${this.params.data.id}`)
            this.params.api.purgeServerSideCache([])
        },

        async toogleApprove() {
            await safwaAxios.patch(`comments/${this.params.data.id}`)
            this.params.api.purgeServerSideCache([])
        }
    }
}
</script>

<style lang="scss" scoped></style>
