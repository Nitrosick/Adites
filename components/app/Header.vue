<template>
  <header
    class="header"
    :class="{ 'header-minimized': scroll > 0 }"
  >
    <div class="header-submenu">
      <div class="header-submenu-content wrapper">
        <NuxtLink
          v-for="item in submenu"
          :key="item.id"
          :to="item.to"
          class="header-submenu-link"
        >
          {{ item.title[ln] }}
        </NuxtLink>
      </div>
    </div>
    <div class="header-menu wrapper">
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
import { submenu } from '@/const/menu';
import Menu from '@/components/app/Menu.vue';

const store = useMainStore()
const ln = computed(() => store.language)
const scroll = ref(0)
const handleScroll = () => { scroll.value = window.scrollY }

onMounted(() => { window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $color-white;
  box-shadow: 0 0 0 0 transparent;
  transition: transform 0.5s;
  z-index: 5;

  &-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    height: 6rem;
    transition: height 0.5s;
  }

  &-submenu {
    border-bottom: 1px solid $color-grey-3;
    height: 3rem;

    &-content {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 100%;
      padding: 0.5rem 1rem;
    }

    &-link {
      text-transform: uppercase;
      font-size: $font-size-sm;
    }
  }

  &-logo {
    height: 3rem;
    transition: height 0.5s;
  }
}

.header-minimized {
  background-color: $color-white-o;
  box-shadow: $shadow;
  transform: translateY(-3rem);

  .header-menu {
    height: 3.5rem;
  }

  .header-logo {
    height: 1.5rem;
  }
}

@include breakpoint-md {
  .header {
    &-submenu {
      display: none;
    }
  }

  .header-minimized {
    transform: none;
  }
}
</style>
