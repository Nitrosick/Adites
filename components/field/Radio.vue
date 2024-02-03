<template>
  <div
    class="radio"
    :class="{ 'radio-disabled': disabled }"
  >
    <span
      v-if="label"
      class="radio-label"
    >
      {{ label }}
    </span>
    <div class="radio-list">
      <div
        v-for="(option, key) in options"
        :key="key"
        class="radio-row"
      >
        <input
          type="radio"
          :id="key"
          :value="key"
          :disabled="disabled"
          class="radio-field"
          v-model="model"
          v-bind="attrs"
        />
        <label :for="key">
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: ''},
  options: { type: Object, required: true},
  disabled: { type: Boolean, default: false},
  attrs: { type: Object, default: () => {}}
})

const model = defineModel({ required: true })
</script>

<style lang="scss" scoped>
.radio {
  &-label {
    display: block;
    font-size: $font-size-sm;
    line-height: 1.5;
  }

  &-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &-field {
    width: auto;
    padding: 0;
    margin: 0;
    accent-color: $color-primary;
  }
}

.radio-disabled {
  opacity: 0.5;
}
</style>
