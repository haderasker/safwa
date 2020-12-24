<template>
    <form class="comment-form">
        <div class="comment-textarea">
            <vs-textarea v-model="body"></vs-textarea>
        </div>
        <div class="comment-replay-button">
            <vs-button
                @click="saveComment()"
                icon-pack="feather"
                icon="icon-home"
                color="primary"
                type="filled" size="small">
                {{ $t('comments.add_reply') }}
            </vs-button>
        </div>
    </form>
</template>

<script>
import safwaAxios from "../../axios";

export default {
    props: {
        parentId: {
            required: false,
            type: Number,
            default: 0
        },
        commentableId: {
            required: true,
            type: Number
        },
        commentableType: {
            required: true,
            Type: String
        }
    },
    data() {
        return {
            body: ''
        }
    },
    methods: {
        async saveComment() {
            try {
                const response = await safwaAxios.post(`comments/${this.parentId}`, {
                    body: this.body,
                    commentable_id: this.commentableId,
                    commentable_type: this.commentableType
                })

                this.body = ''

                this.$emit('saved', response.data)
            } catch (e) {

            }
        }
    }
}
</script>

<style lang="scss" scoped>
.comment-form {
    width: 100%;
    margin-top: 1em;

    .comment-textarea {
        clear: both;
        margin: 0 0 1em;
    }
}
</style>
