<template>
    <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary"
                class="add-new-data-sidebar items-no-padding" spacer v-model="open">
        <div class="mt-6 flex items-center justify-between px-6">
            <h4>
                {{ $t('lessons.add_new_q_title') }}
            </h4>
        </div>

        <vs-divider class="mb-0"></vs-divider>

        <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

            <div class="p-6">
                <h4>{{ $t('lessons.questions') }}</h4>

                <vs-input
                    :label="$t('lessons.new_q_label')"
                    class="mt-5 w-full"
                    name="item-label"
                    v-validate="'required'"
                    v-model="question.label"/>
                <span class="text-danger text-sm" v-show="errors.has('item-label')">
                    {{ errors.first('item-label') }}
                </span>

                <vs-divider></vs-divider>

                <h4 class="mt-5 mb-5">{{ $t('lessons.answers') }}</h4>

                <ul class="mb-5">
                    <li v-for="(item, index) in question.answers" class="mb-5">
                        <vs-radio class="answer-li-radio" v-model="question.correctAnswer" :vs-value="index"></vs-radio>
                        <vs-input
                            class="inline-block"
                            style="width: calc(100% - 55px)"
                            :name="`item-answer-${index}`"
                            v-validate="'required'"
                            v-model="item.label"
                        />
                        <feather-icon icon="XIcon" @click.stop="removeAnswer(index)"
                                      class="answer-li-remove"></feather-icon>
                        <span class="text-danger text-sm" v-show="errors.has(`item-answer-${index}`)">
                            {{ errors.first(`item-answer-${index}`) }}
                        </span>
                    </li>
                </ul>

                <div>
                    <vs-button @click="addAnswer" color="primary" type="flat">
                        {{ $t('lessons.add_answer') }}
                    </vs-button>
                </div>
            </div>
        </component>

        <div class="flex flex-wrap items-center p-6" slot="footer">
            <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">
                {{ $t('lessons.save_q') }}
            </vs-button>
            <vs-button type="border" color="danger" @click="cancel">
                {{ $t('lessons.cancel') }}
            </vs-button>
        </div>
    </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    props: {
        open: {
            type: Boolean,
            required: true
        },
        value: {
            type: Object,
            required: true
        }
    },
    components: {
        VuePerfectScrollbar
    },
    data() {
        return {
            settings: {
                maxScrollbarLength: 60,
                wheelSpeed: .60
            }
        }
    },
    computed: {
        question: {
            get() {
                return this.value
            },
            set() {
                this.$emit('input', this.value)
            }
        },
        isFormValid() {
            return !this.errors.any()
        },
        scrollbarTag() {
            return this.$store.getters['scrollbarTag']
        }
    },
    methods: {
        async submitData() {
            if (!await this.$validator.validateAll()) {
                return
            }

            // set all answers = false
            this.question.answers = this.question.answers.map(item => {
                return {...item, is_correct: false}
            })

            // set only one answer = true
            this.question.answers[this.question.correctAnswer].is_correct = true

            this.closeSidebar(true)
        },
        cancel() {
            this.closeSidebar(false)
        },
        addAnswer() {
            if (this.question.answers.length >= 6) {
                return
            }

            this.question.answers.push({
                label: '',
                is_correct: false
            })
        },
        removeAnswer(index) {
            if (this.question.answers.length < 3) {
                return
            }

            this.question.answers.splice(index, 1)
        },
        closeSidebar(saved) {
            this.$emit('close', saved)
        }
    }
}
</script>

<style lang="scss" scoped>
.answer-li-radio {
    float: left;
    margin: 8px 8px 0 0;
    display: inline-block !important;
}

.answer-li-remove {
    display: inline-block !important;
    cursor: pointer !important;
    float: right;
    margin-top: 6px;
}

.add-new-data-sidebar {
    ::v-deep .vs-sidebar--background {
        z-index: 52010;
    }

    ::v-deep .vs-sidebar {
        z-index: 52010;
        width: 400px;
        max-width: 90vw;

        .img-upload {
            margin-top: 2rem;

            .con-img-upload {
                padding: 0;
            }

            .con-input-upload {
                width: 100%;
                margin: 0;
            }
        }
    }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);

    &:not(.ps) {
        overflow-y: auto;
    }
}
</style>
