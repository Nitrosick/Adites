<template>
  <div
    v-if="checkValues"
    class="roof"
  >
    <div
      class="roof-background"
      :style="{ aspectRatio: `${data.length}/${data.width}` }"
    >
      <div
        class="roof-top"
        :class="{
          'roof-single-slope': +data.slopes === 1,
          'roof-metal': data.roofType === 'metal'
        }"
        :style="{
          backgroundSize: `${panel.width / data.length * (data.roofType === 'tiles' ? 5 : 15)}% auto`,
          gridTemplateColumns: `repeat(${along}, 1fr)`,
          gridTemplateRows: `repeat(${across}, 1fr)`
        }"
      >
        <div class="roof-wrapper">
          <div
            v-for="i in panelsCount"
            :key="i"
            class="roof-panel-slot"
            :class="{ 'roof-panel': i <= data.modulesCount }"
            :style="{
              aspectRatio: `${panel.length}/${panel.width}`,
              width: `${panelWidth}%`
            }"
          />
        </div>
      </div>
      <div
        v-if="+data.slopes === 2"
        class="roof-bottom"
        :class="{ 'roof-metal': data.roofType === 'metal' }"
        :style="{
          backgroundSize: `${panel.width / data.length * (data.roofType === 'tiles' ? 5 : 15)}% auto`,
          gridTemplateColumns: `repeat(${along}, 1fr)`,
          gridTemplateRows: `repeat(${across}, 1fr)`
        }"
      >
        <div class="roof-wrapper">
          <div
            v-for="i in panelsCount"
            :key="i"
            class="roof-panel-slot"
            :class="{ 'roof-panel': i + panelsCount <= data.modulesCount }"
            :style="{
              aspectRatio: `${panel.length}/${panel.width}`,
              width: `${panelWidth}%`
            }"
          />
        </div>
      </div>
      <Ruler :distance="data.length" />
      <Ruler type="v" :distance="data.width" />
    </div>
  </div>
</template>

<script setup>
import Ruler from '@/components/page/calculator/Ruler.vue'

const props = defineProps({
  data: { type: Object, required: true },
  panel: { type: Object, required: true }
})

const panelsCount = computed(() => {
  if (along.value < 1 || across.value < 1) return 0
  const sum = along.value * across.value * (+props.data.slopes === 2 ? 2 : 1)
  const result = +props.data.slopes === 2 ? sum / 2 : sum
  props.data.maxModulesCount = sum
  return result
})

const along = computed(() => Math.floor(props.data.length / props.panel.length))
const across = computed(() => Math.floor((props.data.width / (+props.data.slopes === 2 ? 2 : 1)) / props.panel.width))
const panelWidth = computed(() => (100 / props.data.length) * (along.value * props.panel.length) / along.value)

const checkValues = computed(() => (
  isFinite(props.data.length) &&
  props.data.length > 0 &&
  isFinite(props.data.width) &&
  props.data.width > 0 &&
  isFinite(props.data.modulesCount) &&
  props.data.width >= 0
))
</script>

<style lang="scss" scoped>
.roof {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem 1rem 2rem;
  border: 1px solid $color-grey-3;

  &-background {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: relative;
    background-color: $color-black;
    padding: 2px;
  }

  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  &-top,
  &-bottom {
    height: 50%;
    max-height: 50%;
    background-image: url(@/assets/images/tiles.jpg);
    background-position: left top;
    padding: 2px;
  }

  &-bottom {
    filter: brightness(0.8);
    transform: scale(1, -1);
  }

  &-single-slope {
    height: 100%;
    max-height: initial;
  }

  &-metal {
    background-image: url(@/assets/images/metal.jpg);
  }

  &-panel-slot {
    outline: 1px solid $color-grey-3;
  }

  &-panel {
    background: url(@/assets/images/panel.jpg) center / contain no-repeat;
  }
}
</style>
