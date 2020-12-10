<template>
    <steps :year="year"></steps>
</template>

<script>
import Steps from "./components/Steps";
export default {
    components: {Steps},
    data() {
        return {
            year: {
                label: '',
                first_semester: {
                    start: new Date(),
                    end: new Date(),
                    levels: {
                        level1: [],
                        level2: [],
                        level3: [],
                        level4: [],
                    }
                },
                second_semester: {
                    start: new Date(),
                    end: new Date(),
                    levels: {
                        level1: [],
                        level2: [],
                        level3: [],
                        level4: [],
                    }
                }
            }
        }
    },
    methods: {
        getYear () {
            const yearId = this.$route.params.id
            // load year data
        }
    }
}
</script>

<style lang="scss" scoped></style>
