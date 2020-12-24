<template>
    <div class="comment-wrapper">
        <a class="comment-avatar">
            <img src="@assets/images/logo/main-logo.png">
        </a>

        <div class="comment-content">
            <a class="comment-author">{{ valueData.author.name }}</a>
            <div class="comment-metadata">
                <span class="date">{{ valueData.created_at }}</span>
            </div>
            <div class="comment-body">
                {{ valueData.body }}
            </div>

            <div class="comment-actions">
                <a class="reply" @click.prevent="showReplayForm = !showReplayForm">{{ $t('comments.reply') }}</a>
                <a class="more-replies" @click="loadReplies">
                    {{ $t('comments.load_replies') }} {{ this.valueData.noReplies ? $t('no_replies') : '' }}
                </a>
            </div>

            <replay-comment-form
                v-if="showReplayForm"
                :parentId="valueData.id"
                :commentableId="commentableId"
                :commentableType="commentableType"
                @saved="replySaved"></replay-comment-form>
        </div>

        <!-- if there is any replies, foreach replay create comment -->
        <comment
            v-if="valueData.replies"
            v-for="replay in valueData.replies"
            :key="`comment-${replay.id}`"
            :commentableId="commentableId"
            :commentableType="commentableType"
            :data="replay"></comment>
    </div>
</template>

<script>
import ReplayCommentForm from "./ReplayCommentForm"
import safwaAxios from "../../axios"

export default {
    name: 'comment',
    props: ['data', 'commentableId', 'commentableType'],
    components: {
        ReplayCommentForm
    },
    data() {
        return {
            showReplayForm: false
        }
    },
    computed: {
        valueData: {
            get() {
                return this.data
            },
            set(value) {
                this.$emit('replyAdded', value)
            }
        }
    },
    methods: {
        replySaved(reply) {
            const replies = this.valueData.replies || []
            replies.unshift(reply)
            this.valueData.replies = replies
        },

        async loadReplies() {
            const response = await safwaAxios.get(`comments/${this.valueData.id}`)

            if (!response.data.length) {
                this.$set(this.valueData, 'noReplies', true)
            }

            this.$set(this.valueData, 'replies', response.data)
        }
    }
}
</script>

<style lang="scss" scoped>
.comment-wrapper {
    background: 0 0;
    margin: .5em 0 0;
    padding: .5em 0 0;
    border-style: none;
    line-height: 1.2;

    .comment-wrapper {
        margin: -1.5em 0 -1em 1.25em;
        padding: 3em 0 2em 2.25em;
        -webkit-box-shadow: -1px 0 0 rgba(34, 36, 38, .15);
        box-shadow: -1px 0 0 rgba(34, 36, 38, .15);
    }

    .comment-avatar {
        display: block;
        width: 2.5em;
        height: auto;
        float: left;
        margin: .2em 0 0;

        img {
            display: block;
            margin: 0 auto;
            width: 100%;
            height: 100%;
            border-radius: .25rem;
        }
    }

    .comment-content {
        display: block;
        margin-left: 3.5em;

        .comment-author {
            font-size: 1em;
            color: rgba(0, 0, 0, .87);
            font-weight: 700;
        }

        .comment-metadata {
            display: inline-block;
            margin-left: .5em;
            color: rgba(0, 0, 0, .4);
            font-size: .875em;

            & * {
                display: inline-block;
                margin: 0 .5em 0 0;
            }
        }

        .comment-body {
            margin: .25em 0 .5em;
            font-size: 1em;
            word-wrap: break-word;
            color: rgba(0, 0, 0, .87);
            line-height: 1.3;
        }

        .comment-actions {
            font-size: .875em;

            & * {
                cursor: pointer;
                display: inline-block;
                margin: 0 .75em 0 0;
                color: rgba(0, 0, 0, .4);
            }

            .replay {
                margin-right: 0;
            }
        }
    }
}
</style>
