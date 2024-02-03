<template>
  <div class="textarea">
    <label
      v-if="label"
      :for="id"
      class="textarea-label"
    >
      {{ label }}
    </label>
    <textarea
      :name="id"
      :id="id"
      :placeholder="`${placeholder}...`"
      :required="required"
      :rows="rows"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true},
  label: { type: String, default: ''},
  placeholder: { type: String, default: 'Input'},
  required: { type: Boolean, default: false},
  rows: { type: Number, default: 5},
})
</script>

<style lang="scss" scoped>
.textarea {
  grid-column: 1/-1;

  &-label {
    display: block;
    font-size: $font-size-sm;
    line-height: 1.5;
  }
}
</style>
