<template>
  <div class="input">
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
      :placeholder="`${placeholder}...`"
      :required="required"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true},
  type: { type: String, default: 'text'},
  label: { type: String, default: ''},
  placeholder: { type: String, default: 'Input'},
  required: { type: Boolean, default: false},
})
</script>

<style lang="scss" scoped>
.input {
  &-label {
    display: block;
    font-size: $font-size-sm;
  }
}
</style>
