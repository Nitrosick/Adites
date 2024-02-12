<template>
  <div
    class="ruler"
    :class="{
      'ruler-horizontal': type === 'h',
      'ruler-vertical': type !== 'h'
    }"
  >
    <div class="ruler-start">0</div>
    <div
      v-for="point in pointsNumber"
      :key="point"
      class="ruler-point"
      :style="{
        left: type === 'h' ? `${divisionLength * point}%` : 'auto',
        top: type === 'v' ? `${divisionLength * point}%` : 'auto'
      }"
    >
      {{ point * step }}
    </div>
    <div class="ruler-finish">{{ distance }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'h' },
  distance: { type: Number, required: true }
})

const step = ref(1)

watch(() => props.distance, (val) => {
  if (val > 100) step.value = 10
  else if (val > 30) step.value = 5
  else if (val > 10) step.value = 2
  else step.value = 1
})

const pointsNumber = computed(() => Math.ceil(props.distance / step.value) - 1)
const divisionLength = computed(() => 100 / props.distance * step.value)
</script>

<style lang="scss" scoped>
.ruler {
  position: absolute;

  &-start,
  &-finish,
  &-point {
    display: inline-block;
    position: absolute;
    font-size: $font-size-xsm;
    color: $color-grey-2;
    line-height: 1;

    &::after {
      position: absolute;
      content: '';
      width: 4px;
      height: 4px;
      background-color: $color-grey-2;
      border-radius: 50%;
    }
  }
}

.ruler-horizontal {
  left: 2px;
  right: 2px;
  top: -0.5rem;
  border-bottom: 1px solid $color-grey-2;

  .ruler-start,
  .ruler-finish,
  .ruler-point {
    left: -2px;
    bottom: calc(0.5rem - 2px);
    width: 4px;

    &::after {
      left: 50%;
      bottom: -0.5rem;
      transform: translateX(-50%);
    }
  }

  .ruler-finish {
    left: auto;
    right: -2px;
  }
}

.ruler-vertical {
  top: 2px;
  bottom: 2px;
  left: -0.5rem;
  border-right: 1px solid $color-grey-2;

  .ruler-start,
  .ruler-finish,
  .ruler-point {
    top: -4px;
    right: calc(0.5rem - 2px);

    &::after {
      top: 50%;
      right: -0.5rem;
      transform: translateY(-50%);
    }
  }

  .ruler-finish {
    top: auto;
    bottom: -4px;
  }
}
</style>
