<template>
  <div class="lang-switcher">
    <select
      v-model="lang"
      class="lang-switcher-select"
    >
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const store = useMainStore()
const lang = ref('de')

watch(lang, (newLang) => {
  store.changeLanguage(newLang)
})

onBeforeMount(() => {
  const storageLang = localStorage.getItem('language')

  if (storageLang) {
    store.changeLanguage(storageLang)
    lang.value = storageLang
  }
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
