<template>
    <!-- NOTIFICATIONS -->
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer" @click="markAsRead">
        <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:ml-6 mr-2" :badge="unSeenCount"/>

        <vs-dropdown-menu>
            <ul class="bordered-items notification-dropdown">
                <li v-for="ntf in notifications" :key="ntf.id"
                    class="flex justify-between px-4 py-4 notification cursor-pointer">
                    <div class="flex items-start">
                        <div class="mx-2">
                            <span class="font-medium block notification-title"
                                  :class="[`text-${ ntf.seen_at ? 'primary' : 'success'}`]">{{ ntf.title }}</span>
                            <small>{{ ntf.body }}</small>
                        </div>
                    </div>
                    <small class="mt-1 whitespace-no-wrap">{{ elapsedTime(ntf.sent_at) }}</small>
                </li>
            </ul>

            <div class="notification-footer" @click="loadNotifications()">
                <span>
                    Load More
                </span>
            </div>
        </vs-dropdown-menu>
    </vs-dropdown>
</template>

<script>
import safwaAxios from "../../../../axios";

export default {
    data() {
        return {
            notifications: [],
            unSeenCount: 0,
            page: 0,
            total: 9999999
        }
    },
    mounted() {
        this.loadNotifications()
    },
    methods: {
        elapsedTime(startTime) {
            const x = new Date(startTime)
            const now = new Date()
            let timeDiff = now - x
            timeDiff /= 1000

            const seconds = Math.round(timeDiff)
            timeDiff = Math.floor(timeDiff / 60)

            const minutes = Math.round(timeDiff % 60)
            timeDiff = Math.floor(timeDiff / 60)

            const hours = Math.round(timeDiff % 24)
            timeDiff = Math.floor(timeDiff / 24)

            const days = Math.round(timeDiff % 365)
            timeDiff = Math.floor(timeDiff / 365)

            const years = timeDiff

            if (years > 0) {
                return `${years + (years > 1 ? ' Years ' : ' Year ')}ago`
            } else if (days > 0) {
                return `${days + (days > 1 ? ' Days ' : ' Day ')}ago`
            } else if (hours > 0) {
                return `${hours + (hours > 1 ? ' Hrs ' : ' Hour ')}ago`
            } else if (minutes > 0) {
                return `${minutes + (minutes > 1 ? ' Mins ' : ' Min ')}ago`
            } else if (seconds > 0) {
                return seconds + (seconds > 1 ? ' sec ago' : 'just now')
            }

            return 'Just Now'
        },
        // Method for creating dummy notification time
        randomDate({hr, min, sec}) {
            const date = new Date()

            if (hr) date.setHours(date.getHours() - hr)
            if (min) date.setMinutes(date.getMinutes() - min)
            if (sec) date.setSeconds(date.getSeconds() - sec)

            return date
        },

        async loadNotifications() {
            if (this.notifications.length >= this.total) {
                return
            }

            this.page = this.page + 1

            const response = await safwaAxios.get('notifications', {
                params: {
                    per_page: 5,
                    page: this.page
                }
            })

            this.total = response.data.total

            this.notifications = this.notifications.concat(response.data.data)

            this.unSeenCount = this.notifications.filter(ntf => ntf.seen_at === null).length
        },

        async markAsRead() {
            await safwaAxios.post('notifications/mark-read', {
                notifications_ids: this.notifications.map(ntf => ntf.id)
            })
        }
    }
}

</script>

<style lang="scss" scoped>
.notification-dropdown {
    max-height: 354px;
    overflow-y: scroll;
}

.notification-footer {
    background-color: #f8f8f8;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;
    border-top: 1px solid #dae1e7;

    span {
        color: rgba(var(--vs-primary), 1);
        font-weight: 600;
    }
}
</style>
