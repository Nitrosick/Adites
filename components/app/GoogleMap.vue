<template>
  <ClientOnly>
    <iframe
      :src="src"
      allowfullscreen=""
      loading="lazy"
      class="map"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </ClientOnly>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  min-height: 25rem;
  border: none;
  background-color: $color-grey-3;
}

@include breakpoint-lg {
  .map {
    height: 25rem;
  }
}
</style>
