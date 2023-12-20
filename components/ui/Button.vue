<template>
  <button
    v-if="text"
    class="button"
    :type="type"
    :class="{ 'button-outlined': view === 'outlined' }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'button' },
  text: { type: String, required: true },
  view: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>
.button {
  background-color: $color-primary;
  color: $color-white;
  height: 2.5rem;
  min-width: 10rem;
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
