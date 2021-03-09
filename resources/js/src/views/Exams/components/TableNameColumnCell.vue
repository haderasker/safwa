<template>
    <router-link :to="{name: 'exams.edit', params: { id: params.data.id }}">{{ params.data.label }}</router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
