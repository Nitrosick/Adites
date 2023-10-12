<template>
  <div class="poster">
    <img
      src="@/assets/images/poster.jpg"
      alt="poster"
      class="poster-img"
      loading="lazy"
    >
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.poster {
  height: 60vh;

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
