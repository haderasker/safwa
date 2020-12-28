<template>
    <div class="w-full sm:w-1/2 md:w-1/3 py-4 mx-auto timer rounded-lg">
        <h4 class="text-center text-5xl mb-4 text-white">
            {{ prettyTime }}
        </h4>
        <p class="text-center text-white">
            {{ $t('general.timer_message') }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            timer: null
        }
    },
    mounted() {
        this.startTimer()
    },
    computed: {
        prettyTime() {
            const timestamp = this.time;
            const hours = Math.floor(timestamp / 60 / 60);
            const minutes = Math.floor(timestamp / 60) - (hours * 60);
            const seconds = timestamp % 60;

            return hours.toString().padStart(2, '0') +
                ':' +
                minutes.toString().padStart(2, '0') +
                ':' +
                seconds.toString().padStart(2, '0');
        },
        time: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    },
    methods: {
        startTimer() {
            if (!this.timer) {
                this.timer = setInterval(() => {
                    if (this.time > 0) {
                        this.time--
                    } else {
                        clearInterval(this.timer)
                        // timer ended we should auto Submit
                        // the exam and notify Student
                        this.$emit('finished')
                    }
                }, 1000)
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.timer {
    background: #2182a3;
}
</style>
