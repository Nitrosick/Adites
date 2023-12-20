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
  height: calc(100vh - ($height-header + 2rem));

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@include breakpoint-md {
  .poster {
    height: 40vh;
    background: url(/assets/images/poster.jpg) 45% 0 / auto 100% no-repeat;

    &-img {
      display: none;
    }
  }
}
</style>
