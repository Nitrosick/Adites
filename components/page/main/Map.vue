<template>
  <div class="map">
    <div class="map-content wrapper">
      <GoogleMap :src="persons[0].map" />
    </div>
  </div>
</template>

<script setup>
import { persons } from '@/const/persons'
import GoogleMap from '@/components/app/GoogleMap.vue'
</script>

<style lang="scss" scoped>
.map {
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 1rem;
  }
}
</style>
