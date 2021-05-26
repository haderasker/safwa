<template>
    <span>
        {{ params.data.nationality ? $t(`countries.${params.data.nationality}`) : '' }}
    </span>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
