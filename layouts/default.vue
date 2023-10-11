<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/app/Header.vue';
import Footer from '@/components/app/Footer.vue';

</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
