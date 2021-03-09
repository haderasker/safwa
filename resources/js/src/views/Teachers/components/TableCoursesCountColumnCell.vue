<template>
    <div>
<!--        <vx-tooltip-->
<!--            v-if="params.data.teacher_courses_count > 0"-->
<!--            position="bottom"-->
<!--            text="Tooltip position Top" >-->
<!--            <router-link  :to="{ name: 'courses.list', query: { teacher_id: params.data.id } }">-->
<!--                {{ params.data.teacher_courses_count }}-->
<!--            </router-link>-->
<!--        </vx-tooltip>-->

        <router-link v-if="params.data.teacher_courses_count > 0" :to="{ name: 'courses.list', query: { teacher_id: params.data.id } }">
            {{ params.data.teacher_courses_count }}
        </router-link>

        <span v-else>
            0
        </span>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped></style>
