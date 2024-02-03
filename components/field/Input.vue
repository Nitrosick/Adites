<template>
  <div
    class="input"
    :class="{ 'input-disabled': disabled }"
  >
    <label
      v-if="label"
      :for="id"
      class="input-label"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      :name="id"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      class="input-field"
      v-model="model"
      v-bind="attrs"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true},
  type: { type: String, default: 'text'},
  label: { type: String, default: ''},
  placeholder: { type: String, default: ''},
  required: { type: Boolean, default: false},
  disabled: { type: Boolean, default: false},
  attrs: { type: Object, default: () => {}}
})

const model = defineModel({ default: null })
</script>

<style lang="scss" scoped>
.input {
  &-label {
    display: block;
    font-size: $font-size-sm;
    line-height: 1.5;
  }
}

.input-disabled {
  opacity: 0.5;
}
</style>
