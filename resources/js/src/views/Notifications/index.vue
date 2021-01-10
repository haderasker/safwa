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

            <div class="w-full mt-6">
                <h6>{{ $t('notifications.email_content') }}</h6>
                <vs-textarea v-model="emailContent"/>
            </div>

            <vs-button class="mr-4" @click="sendEmail">{{ $t('notifications.send') }}</vs-button>
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
            emailContent: '',
            categoryOption: null,
            categoryContentOption: null,
            categoryContentOptions: []
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
        }
    },
    mounted() {
        this.getCategoryContent({id: 'teachers'})
    },
    methods: {
        async getCategoryContent(category) {
            if (!category) return
            if (process.env.MIX_APP_ENV !== 'production') {
                switch (category.id) {
                    case 'teachers':
                        return this.categoryContentOptions = [
                            {id: -1, name: this.$t('notifications.all')},
                            {id: 1, name: 'teacher 1'},
                            {id: 2, name: 'teacher 2'},
                        ]
                    case 'levels':
                        return this.categoryContentOptions = [
                            {id: -1, name: this.$t('notifications.all')},
                            {id: 1, name: 'level 1'},
                            {id: 2, name: 'level 2'},
                        ]
                    case 'students':
                        return this.categoryContentOptions = [
                            {id: -1, name: this.$t('notifications.all')},
                            {id: 1, name: 'student 1'},
                            {id: 2, name: 'student 2'},
                        ]
                }
            }

            const response = safwaAxios.get(`${category.id}`)
            this.categoryContentOptions = [
                {id: -1, name: this.$t('notifications.all')},
                ...response.data
            ]
        },
        async sendEmail() {
            this.$vs.loading()
            try {
                if(process.env.MIX_APP_ENV !== 'production') {
                    return setTimeout(() => {
                        this.$vs.loading.close()
                        this.successMessage({
                            title: this.$t('notifications.success_title'),
                            message: this.$t('notifications.success_message')
                        })
                    }, 1500)
                }

                await safwaAxios.post('notifications/email', {
                    content: this.emailContent
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
