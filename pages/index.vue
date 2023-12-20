<template>
  <div class="main margined">
    <Poster />
    <Welcome />
    <Consultants />
    <Projects />
    <Summary />
    <About />
    <Map />
  </div>
</template>

<script setup>
import Poster from '@/components/page/main/Poster.vue';
import Welcome from '@/components/page/main/Welcome.vue';
import Consultants from '@/components/page/main/Consultants.vue';
import Projects from '@/components/page/main/Projects.vue';
import Summary from '@/components/page/main/Summary.vue';
import About from '@/components/page/main/About.vue';
import Map from '@/components/page/main/Map.vue';
</script>
