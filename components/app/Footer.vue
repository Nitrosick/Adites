<template>
  <div class="footer">
    <div class="footer-content wrapper">
      <img
        src="@/assets/images/sun_panel.png"
        alt="sun panel"
        class="footer-icon"
      >
      <div class="footer-text">
        <h2 v-html="translates[ln].title" />
        <span>Heroldstraße 8, 90408 Nürnberg</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: { title: "Adite's advice" },
  de: { title: 'Adites beratung' },
  hr: { title: 'Urednički savjet' }
}
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

  &-text {
    h2 {
      text-align: left;
    }

    color: $color-white;
  }
}
</style>
