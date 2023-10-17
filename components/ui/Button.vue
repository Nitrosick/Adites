<template>
  <button
    v-if="text"
    class="button"
    :class="{ 'button-outlined': type === 'outlined' }"
    @click.prevent="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.button {
  background-color: $color-primary;
  color: $color-white;
  height: 2.5rem;
  font-size: $font-size-lg;
  padding: 0 1rem;
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
}

.button-outlined {
  border: 1px solid $color-primary;
  background-color: $color-background;
  color: $color-grey-1;
}
</style>
