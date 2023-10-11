<template>
  <div class="footer">
    <div class="footer-content wrapper">
      <img
        src="@/assets/images/sun_panel.png"
        alt="sun panel"
        class="footer-icon"
      >
      <div class="footer-text">
        <h2>Adite's advice</h2>
        <span>Heroldstraße 8, 90408 Nürnberg</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-grey-1;

  &-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 3rem 1rem;
  }

  &-icon {
    filter: drop-shadow(0 0 3px $color-black);
  }

  &-text {
    color: $color-white;
  }
}
</style>
