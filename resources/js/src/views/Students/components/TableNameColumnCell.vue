<template>
    <router-link :to="{name: 'students.show', params: { id: params.data.id }}">{{ params.data.name }}</router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
