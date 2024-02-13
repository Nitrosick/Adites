<template>
  <div
    class="checkbox"
    :class="{ 'checkbox-disabled': disabled }"
    :title="label.length >= limit ? label : undefined"
  >
    <label
      v-if="label"
      :for="id"
      class="checkbox-label"
    >
      {{ preparedLabel }}
    </label>
    <label class="checkbox-custom">
      <input
        type="checkbox"
        :name="id"
        :id="id"
        :disabled="disabled"
        class="checkbox-field"
        v-model="model"
        v-bind="attrs"
      />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true},
  label: { type: String, required: true},
  disabled: { type: Boolean, default: false},
  attrs: { type: Object, default: () => {}}
})

const limit = 30
const model = defineModel({ default: null })

const preparedLabel = computed(() => {
  if (props.label.length < limit) return props.label
  return props.label.substring(0, limit) + '...'
})
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  border: 1px solid $color-grey-3;
  height: 57px;

  &-custom {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    background-color: $color-grey-3;
    margin-right: 1rem;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  &-custom:has(.checkbox-field:checked) {
    background-color: $color-primary;
  }

  &-field {
    transform: scale(0);
  }

  &-label {
    flex-grow: 1;
    padding: 0 1rem;
    white-space: nowrap;
    cursor: pointer;
  }
}

.checkbox-disabled {
  opacity: 0.5;
}
</style>
