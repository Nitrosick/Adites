<template>
  <div class="summary">
    <div class="summary-content wrapper">
      <img
        src="@/assets/images/sun_panel.png"
        alt="sun panel"
        class="summary-icon"
      >
      <div>
        <h2 class="summary-title">
          10561
        </h2>
        <span class="summary-text">
          The number of batteries<br>
          we have installed
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.summary {
  background: url(/assets/images/background_3.jpg) center / cover no-repeat;
  padding: 4rem 0;

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  &-title {
    text-align: left;
    font-size: $font-size-xxxl;
    font-weight: 500;
    color: $color-white;
    margin-bottom: 1rem;
  }

  &-text {
    color: $color-white;
  }
}
</style>
