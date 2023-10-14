<template>
  <div class="lang-switcher">
    <select
      v-model="lang"
      class="lang-switcher-select"
    >
      <option value="en">EN</option>
      <option value="de">DE</option>
      <option value="hr">HR</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const storageLang = localStorage.getItem('language')
const store = useMainStore()
const lang = ref(storageLang ?? 'hr')

if (storageLang) store.changeLanguage(storageLang)

watch(lang, (newLang) => {
  store.changeLanguage(newLang)
})
</script>

<style lang="scss" scoped>
.lang-switcher {
  &-select {
    height: 100%;
    font-weight: 600;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
