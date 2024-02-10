<template>
  <div class="checkbox-container">
    <div
      class="checkbox"
      :class="{ 'checkbox-disabled': disabled }"
    >
      <label
        v-if="label"
        :for="id"
        class="checkbox-label"
      >
        {{ label }}
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
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true},
  label: { type: String, required: true},
  disabled: { type: Boolean, default: false},
  attrs: { type: Object, default: () => {}}
})

const model = defineModel({ default: null })
</script>

<style lang="scss" scoped>
.checkbox-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.checkbox {
  display: flex;
  align-items: center;
  border: 1px solid $color-grey-3;
  height: 55px;

  &-custom {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid $color-grey-3;
    margin-right: 1rem;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: $color-grey-3;
    }
  }

  &-custom:has(.checkbox-field:checked) {
    background-color: $color-primary;
  }

  &-field {
    transform: scale(0);
    // position: relative;
    // opacity: 0;
    // width: 1.2rem;
    // height: 1.2rem;
    // margin: 0;
    // margin-right: 1rem;
    // padding: 0;
    // accent-color: $color-primary;
    // cursor: pointer;
  }

  &-label {
    flex-grow: 1;
    padding: 0 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
}

.checkbox-disabled {
  opacity: 0.5;
}
</style>
