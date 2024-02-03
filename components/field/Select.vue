<template>
  <div
    class="select"
    :class="{ 'select-disabled': disabled }"
  >
    <label
      v-if="label"
      :for="id"
      class="select-label"
    >
      {{ label }}
    </label>
    <select
      :name="id"
      :id="id"
      :disabled="disabled"
      class="select-field"
      v-model="model"
      v-bind="attrs"
    >
      <option
        v-if="defaultValue"
        :value="null"
      >
        -
      </option>
      <option
        v-for="(value, key) in options"
        :key="key"
        :value="key"
      >
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true},
  label: { type: String, default: ''},
  options: { type: Object, required: true},
  disabled: { type: Boolean, default: false},
  defaultValue: { type: Boolean, default: true},
  attrs: { type: Object, default: () => {}}
})

const model = defineModel({ required: true })
</script>

<style lang="scss" scoped>
.select {
  &-label {
    display: block;
    font-size: $font-size-sm;
    line-height: 1.5;
  }

  &-field {
    font-family: $font-main;
    border: 1px solid $color-grey-3;
    width: 100%;
    padding: 1rem;
  }
}

.select-disabled {
  opacity: 0.5;
}
</style>
