<template>
  <nav class="menu">
    <NuxtLink
      v-for="item in items"
      :key="item.id"
      :to="item.to"
      class="menu-item"
    >
      {{ item.title }}
    </NuxtLink>
  </nav>
</template>

<script setup>
const items = [
  { id: 1, title: 'start', to: '/' },
  { id: 2, title: 'about us', to: '/about' },
  { id: 3, title: 'credentials', to: '/credentials' },
  { id: 4, title: 'contact', to: '/contact' }
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

  .router-link-active {
    color: $color-green;
    cursor: default;
  }
}
</style>
