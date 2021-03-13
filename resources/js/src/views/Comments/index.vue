<template>
    <div>
        <div class="router-header flex flex-wrap items-center mb-6">
            <div class="content-area__heading">
                <h2 class="mb-1">{{ $t('comments.title') }}</h2>
            </div>
        </div>

        <vx-card :title="$t('comments.all_comments')">
            <template slot="actions">
                <vx-tooltip position="right" :text="$t('comments.filter.tooltip')"
                            class="ml-auto md:block hidden cursor-pointer">
                    <vs-button icon="icon-settings" icon-pack="feather" @click="showFilters"/>
                </vx-tooltip>
            </template>
            <div v-if="filters" class="mb-5">
                <div class="vx-row">
                    <div class="vx-col w-full md:w-1/3 mb-5">
                        <div class="vx-col w-full">
                            <span>{{ $t('comments.filter.search') }}</span>
                        </div>
                        <div class="vx-col w-full">
                            <vs-input class="w-full" v-model="agFilters.search"/>
                        </div>
                    </div>
                    <div class="vx-col w-1/2">
                        <vs-button class="mr-3 mt-5" @click="applyFilters">{{ $t('comments.filter.title') }}</vs-button>
                    </div>
                </div>
            </div>
            <ag-table
                ref="allCommentsTable"
                :filters="agFilters"
                :columns="agColumns"
                :options="agOptions"
            ></ag-table>
        </vx-card>

        <vs-prompt
            :title="popup.title"
            @cancel="hidePopup"
            @accept="saveComment"
            @close="hidePopup"
            :active.sync="popup.display">
            <div>
                <vs-textarea v-model="popup.body" height="200px"></vs-textarea>
            </div>
        </vs-prompt>
    </div>
</template>

<script>
import AgTable from "../../components/AgTable";
import CommentsDataSource from "../../datasources/CommentsDataSource";
import tableActionColumnCell from './components/TableActionColumnCell'
import tableAddedOnColumnCell from './components/TableAddedOnColumnCell'
import tableAuthorColumnCell from './components/TableAuthorColumnCell'
import safwaAxios from "../../axios";

export default {
    components: {
        AgTable,
        tableActionColumnCell,
        tableAddedOnColumnCell,
        tableAuthorColumnCell
    },
    data() {
        return {
            popup: {
                title: '',
                display: false,
                id: null,
                parent_id: 0,
                body: '',
                commentableId: null,
                commentableType: null
            },
            filters: false,
            agFilters: {
                search: null,
                model_id: null,
                model_type: null
            },
            agOptions: {
                dataSource: CommentsDataSource,
                context: this
            }
        }
    },
    mounted() {
        this.agFilters.model_id = this.$route.query.model_id || null
        this.agFilters.model_type = this.$route.query.model_type || null
    },
    methods: {
        showFilters() {
            this.filters = !this.filters
        },
        applyFilters() {
            this.$refs['allCommentsTable'].applyFilters()
        },
        showPopup(id, body, parent, commentableId, commentableType, title) {
            this.popup.title = title
            this.popup.id = id
            this.popup.parent_id = parent
            this.popup.body = body
            this.popup.commentableId = commentableId
            this.popup.commentableType = commentableType
            this.popup.display = true
        },
        hidePopup() {
            this.popup.title = ''
            this.popup.id = null
            this.popup.parent_id = 0
            this.popup.body = ''
            this.popup.commentableId = null
            this.popup.commentableType = null
            this.popup.display = false
        },
        async saveComment() {
            if(this.popup.id) {
                // update
                await safwaAxios.put(`comments/${this.popup.id}`, {
                    body: this.popup.body,
                })
            } else {
                // create replay
                const type = this.popup.commentableType.split('\\')
                await safwaAxios.post(`comments/${this.popup.parent_id}`, {
                    body: this.popup.body,
                    commentable_id: this.popup.commentableId,
                    commentable_type: type[type.length - 1].toLowerCase()
                })
            }

            // after save the comment
            this.hidePopup()

            // refresh table
            this.$refs['allCommentsTable'].refreshGrid()
        }
    },
    computed: {
        agColumns() {
            const self = this

            return [
                {
                    headerName: this.$t('comments.list.columns.author'),
                    field: 'author.name',
                    minWidth: 170,
                    cellRendererFramework: 'tableAuthorColumnCell'
                },
                {
                    headerName: this.$t('comments.list.columns.comment'),
                    field: 'body',
                    minWidth: 170,
                },
                {
                    headerName: this.$t('comments.list.columns.added_on'),
                    minWidth: 170,
                    cellRendererFramework: 'tableAddedOnColumnCell'
                },
                {
                    headerName: this.$t('comments.list.columns.added_at'),
                    minWidth: 170,
                    valueGetter(params) {
                        if(!params.data) return
                        return self.$moment(params.data.created_at).format('D-M-YYYY')
                    }
                },
                {
                    headerName: this.$t('comments.list.columns.actions'),
                    minWidth: 350,
                    sortable: false,
                    cellRendererFramework: 'tableActionColumnCell'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>
