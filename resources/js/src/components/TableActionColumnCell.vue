<template>
    <div>
        <router-link v-if="params.routeName" :to="{ name: params.routeName, params: { id: params.data.id } }">
            {{ $t('general.edit') }}
        </router-link>

        <router-link v-if="params.courseRouteName"
                     :to="{ name: params.courseRouteName, params: { id: params.data.id } }">{{ $t('general.view') }}
        </router-link>

        <router-link v-if="params.lessonRouteName"
                     :to="{ name: params.lessonRouteName, query: { course: params.data.id } }">{{
                $t('general.lessons')
            }}
        </router-link>

        <a v-if="params.deletableType" href="#" @click.prevent="deleteModel(params.data.id, params.deletableType)">
            {{ $t('general.delete.button') }}
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deletableId: null,
            deletableType: null
        }
    },
    methods: {
        async deleteModel(deletableId, deletableType) {
            this.deletableId = deletableId
            this.deletableId = deletableType

            this.confirm(
                this.$t('general.delete.title'),
                this.$t('general.delete.message'),
                this.delete
            )
        },

        delete() {
            console.log(this.deletableId, this.deletableType)
        }
    }
}
</script>

<style lang="scss" scoped></style>
