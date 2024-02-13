<template>
  <ClientOnly>
    <FontAwesomeIcon :icon="`${collection} fa-${img}`" />
  </ClientOnly>
</template>

<script setup>
defineProps({
  img: { type: String, required: true },
  collection: { type: String, default: 'fas' }
})
</script>
