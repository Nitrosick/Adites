<template>
  <nav class="menu">
    <NuxtLink
      v-for="item in items"
      :key="item.id"
      :to="item.to"
      class="menu-item"
    >
      {{ item.title[ln] }}
    </NuxtLink>
    <LangSwitcher />
    <button
      class="menu-burger"
      @click.prevent="menuOpened = !menuOpened"
    >
      <Icon icon="fas fa-bars" />
    </button>
  </nav>
  <div
    class="menu-popup-overlay"
    :class="{ 'opened': menuOpened }"
    @click="menuOpened = false"
  />
  <nav
    class="menu-popup"
    :class="{ 'opened': menuOpened }"
  >
    <NuxtLink
      v-for="item in items"
      :key="item.id"
      :to="item.to"
      class="menu-popup-item"
      @click="menuOpened = false"
    >
      {{ item.title[ln] }}
    </NuxtLink>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import LangSwitcher from '@/components/app/LangSwitcher.vue';

const store = useMainStore()
const ln = computed(() => store.language)
const menuOpened = ref(false)

const items = [
  { id: 1, title: { en: 'start', de: 'start', hr: 'početak' }, to: '/' },
  { id: 2, title: { en: 'about us', de: 'über uns', hr: 'o nama' }, to: '/about' },
  { id: 3, title: { en: 'credentials', de: 'referenzen', hr: 'ovlasti' }, to: '/credentials' },
  { id: 4, title: { en: 'contacts', de: 'kontakt', hr: 'kontakti' }, to: '/contacts' }
]
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  gap: 2rem;
  height: 100%;

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-transform: uppercase;
  }

  &-burger {
    display: none;
  }
}

.menu-popup-overlay,
.menu-popup {
  display: none;
}

@include breakpoint-md {
  .menu {
    &-item {
      display: none;
    }

    &-burger {
      font-size: $font-size-lg;
      padding: 0 0.5rem;
      display: block;
    }
  }

  .menu-popup-overlay {
    display: none;

    &.opened {
      display: flex;
      justify-content: flex-end;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
    }
  }

  .menu-popup {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: $color-white;
    box-shadow: $shadow;
    transform: translateX(120%);
    transition: transform 0.5s;

    &.opened {
      transform: translateX(0);
    }

    &-item {
      text-transform: uppercase;
      line-height: 2.5rem;
    }
  }
}
</style>
