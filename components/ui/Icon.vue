<template>
  <ClientOnly>
    <FontAwesomeIcon :icon="`fas fa-${img}`" />
  </ClientOnly>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
</style>
