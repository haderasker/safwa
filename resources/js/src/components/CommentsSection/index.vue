<template>
    <div>
        <replay-comment-form :commentableId="replayCommentableId" :commentableType="replayCommentableType"
                             @saved="replyAdded"></replay-comment-form>

        <comment
            v-for="comm in comments.data"
            :key="`comment-${comm.id}`"
            :data="comm"
            :commentableId="replayCommentableId"
            :commentableType="replayCommentableType"
            @replyAdded="commentUpdated"></comment>

        <div class="btn-group">
            <vs-button @click="prevPage">{{ $t('comments.previous') }}</vs-button>
            <vs-button @click="nextPage">{{ $t('comments.next') }}</vs-button>
        </div>
    </div>
</template>

<script>
import ReplayCommentForm from "./ReplayCommentForm";
import Comment from "./Comment";
import safwaAxios from "../../axios";

export default {
    props: ['commentableId', 'commentableType'],
    components: {
        Comment,
        ReplayCommentForm
    },
    data() {
        return {
            replayCommentableId: Number(this.$route.params.id),
            replayCommentableType: 'lesson',
            comments: {},
            page: 1,
            perPage: 10
        }
    },
    mounted() {
        this.commentsList()
    },
    methods: {
        commentUpdated(comment) {
            const index = this.comments.data.findIndex(item => item.id === comment.id)
            this.comments.data[index] = comment
        },
        replyAdded(reply) {
            this.comments.data.unshift(reply)
        },
        nextPage() {
            if (this.comments.data.length < this.perPage) {
                return
            }

            this.page++
            this.commentsList()
        },
        prevPage() {
            if (this.page < 1) {
                return
            }

            this.page--
            this.commentsList()
        },
        async commentsList() {
            const response = await safwaAxios.get(`comments/${this.commentableType}/${this.commentableId}/`, {
                params: {
                    perPage: this.perPage,
                    page: this.page
                }
            })

            this.comments = response.data
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
