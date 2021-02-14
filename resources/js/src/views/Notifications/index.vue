<template>
    <div>
        <vx-card :title="pageTitle" class="notifications-page">
            <div class="inline-block w-full mr-6 lg:w-1/3">
                <h6>{{ $t('notifications.select_category') }}</h6>
                <v-select label="title" :options="categoryOptions" v-model="categoryOption"></v-select>
            </div>
            <div class="inline-block w-full lg:w-1/3">
                <h6>{{ $t('notifications.select_one') }}</h6>
                <v-select label="name" :options="categoryContentOptions" v-model="categoryContentOption"></v-select>
            </div>

            <div class="inline-block w-full lg:w-1/3">
                <h6>{{ $t('notifications.type_title') }}</h6>
                <div class="mt-4">
                    <vs-radio v-model="type" vs-value="notification" class="mr-4">
                        {{ $t('notifications.type_notification') }}
                    </vs-radio>
                    <vs-radio v-model="type" vs-value="email" class="mr-4">
                        {{ $t('notifications.type_email') }}
                    </vs-radio>
                </div>
            </div>

            <div class="w-full mt-6">
                <h6>{{ $t('notifications.notification_title') }}</h6>
                <vs-input class="w-full" v-model="title"/>
            </div>

            <div class="w-full mt-6">
                <h6>{{ $t('notifications.content') }}</h6>
                <vs-textarea v-model="content"/>
            </div>

            <vs-button class="mr-4" @click="sendNotification">{{ $t('notifications.send') }}</vs-button>
        </vx-card>
    </div>
</template>

<script>
import safwaAxios from "../../axios";
import popups from "../../mixins/popups";

export default {
    mixins: [popups],
    data() {
        return {
            activePopup: false,
            content: '',
            title: '',
            categoryOption: null,
            categoryContentOption: null,
            categoryContentOptions: [],
            type: 'notification'
        }
    },
    computed: {
        pageTitle() {
            return this.$t('notifications.title')
        },
        categoryOptions() {
            const arr = []
            if(this.$hasRole('admin')) {
                arr.push({
                    id: 'teachers',
                    title: this.$t('notifications.teachers')
                })
            }

            return [
                ...arr,
                {
                    id: 'levels',
                    title: this.$t('notifications.levels')
                },
                {
                    id: 'students',
                    title: this.$t('notifications.students')
                }
            ]
        }
    },
    watch: {
        categoryOption(newValue) {
            this.getCategoryContent(newValue)
            this.categoryContentOption = null
        }
    },
    mounted() {
        this.getCategoryContent({id: 'teachers'})
    },
    methods: {
        async getCategoryContent(category) {
            if (!category) return

            const response = await safwaAxios.get(`${category.id}`)

            this.categoryContentOptions = [
                {id: -1, name: this.$t('notifications.all')},
                ...response.data.data
            ]
        },
        async sendNotification() {
            this.$vs.loading()
            try {
                await safwaAxios.post('notifications', {
                    content: this.content,
                    group: this.categoryOption.id,
                    member: this.categoryContentOption.id,
                    type: this.type,
                    title: this.title
                })

                // show success message
                this.$vs.loading.close()
                this.successMessage({
                    title: this.$t('notifications.success_title'),
                    message: this.$t('notifications.success_message')
                })
            } catch (e) {
                // show error message
                this.$vs.loading.close()
                this.failMessage({
                    title: this.$t('notifications.failed_title'),
                    message: this.$t('notifications.failed_message'),
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.notifications-page::v-deep .vs-textarea {
    height: 200px;
}

</style>
