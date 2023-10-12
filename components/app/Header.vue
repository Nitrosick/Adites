<template>
  <header
    class="header"
    :class="{ 'header-minimized': scroll > 100 }"
  >
    <div class="header-content wrapper">
      <NuxtLink to="/">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="header-logo"
        >
      </NuxtLink>
      <Menu />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Menu from '@/components/app/Menu.vue';

const scroll = ref(0)

onMounted(() => { window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })

const handleScroll = () => {
  scroll.value = window.scrollY
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: $color-white;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.5s;

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    height: 100%;
  }

  &-logo {
    height: 3rem;
  }
}

.header-minimized {
  height: 3rem;
  background-color: $color-white-o;
  box-shadow: $shadow;

  .header-content {
    padding: 0.75rem 1rem;
  }

  .header-logo {
    height: 1.5rem;
  }
}
</style>
