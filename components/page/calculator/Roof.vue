<template>
  <div
    v-if="checkValues"
    class="roof"
  >
    <div
      :class="`roof-background roof-${data.roofType}`"
      :style="{
        aspectRatio: `${data[slope].length}/${data[slope].width}`,
        backgroundSize: `${panel.width / data[slope].length * (data.roofType === 'tiles' ? 5 : 15)}% auto`,
      }"
    >
      <div class="roof-panels-wrapper">
        <div
          v-for="i in panelsCount"
          :key="i"
          class="roof-panel-slot"
          :class="{ 'roof-panel': i <= data[slope].modules }"
          :style="{
            aspectRatio: `${panel.length}/${panel.width}`,
            width: `${panelWidth}%`
          }"
        />
      </div>
      <span
        v-if="+data.slopes === 2"
        class="roof-slope-mark"
      >
        {{ slope === 'first' ? 'a' : 'b' }}
      </span>
      <Ruler :distance="data[slope].length" />
      <Ruler type="v" :distance="data[slope].width" />
    </div>
  </div>
</template>

<script setup>
import Ruler from '@/components/page/calculator/Ruler.vue'

const props = defineProps({
  slope: { type: String, default: 'first' },
  data: { type: Object, required: true },
  panel: { type: Object, required: true }
})

const panelsCount = computed(() => {
  if (along.value < 1 || across.value < 1) return 0
  const { data, slope } = props
  const sum = along.value * across.value
  data[slope].max = sum
  return sum
})

const along = computed(() => {
  const { data, slope, panel } = props
  return Math.floor(data[slope].length / panel.length)
})

const across = computed(() => {
  const { data, slope, panel } = props
  return Math.floor(data[slope].width / panel.width)
})

const panelWidth = computed(() => {
  const { data, slope, panel } = props
  return (100 / data[slope].length) * (along.value * panel.length) / along.value
})

const checkValues = computed(() => {
  const { data, slope } = props
  return (
    isFinite(data[slope].length) &&
    data[slope].length > 0 &&
    isFinite(data[slope].width) &&
    data[slope].width > 0 &&
    isFinite(data[slope].modules) &&
    data[slope].modules >= 0
  )
})
</script>

<style lang="scss" scoped>
.roof {
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem 1rem 2rem;
  border: 1px solid $color-grey-3;

  &-background {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    border: 2px solid var(--color-grey-2);
    background-position: 0 0;
  }

  &-panels-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &-panel-slot {
    outline: 1px solid $color-grey-3;
  }

  &-panel {
    background: url(@/assets/images/panel.jpg) center / contain no-repeat;
  }

  &-tiles {
    background-image: url(@/assets/images/tiles.jpg);
  }

  &-metal {
    background-image: url(@/assets/images/metal.jpg);
  }

  &-slope-mark {
    position: absolute;
    top: 3rem;
    left: 3rem;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 15rem;
    color: $color-white;
    opacity: 0.2;
    line-height: 0.8;
    cursor: default;
  }
}
</style>
