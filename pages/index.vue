<template>
  <div class="main">
    <Poster />
    <Welcome />
    <Consultants />
    <Projects />
    <Summary />
    <About />
  </div>
</template>

<script setup>
import Poster from '@/components/page/main/Poster.vue';
import Welcome from '@/components/page/main/Welcome.vue';
import Consultants from '@/components/page/main/Consultants.vue';
import Projects from '@/components/page/main/Projects.vue';
import Summary from '@/components/page/main/Summary.vue';
import About from '@/components/page/main/About.vue';
</script>

<style lang="scss" scoped>
.main {
  margin-top: 6rem;
}
</style>
