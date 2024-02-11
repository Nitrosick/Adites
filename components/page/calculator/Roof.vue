<template>
  <div class="roof">
    <div
      class="roof-background"
      :style="{
        aspectRatio: `${data.length}/${data.width}`,
        width: data.length >= data.width ? '100%' : 'auto',
        height: data.length > data.width ? 'auto' : '80vh'
      }"
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
        <div
          v-for="i in panelsCount"
          :key="i"
          class="roof-panel"
        />
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
        <div
          v-for="i in panelsCount"
          :key="i"
          class="roof-panel"
        />
      </div>
      <span class="roof-width">{{ data.width }} m.</span>
      <span class="roof-length">{{ data.length }} m.</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true },
  panel: { type: Object, required: true }
})

const panelsCount = computed(() => {
  if (along.value < 1 || across.value < 1) return 0
  const sum = along.value * across.value * (+props.data.slopes === 2 ? 2 : 1)
  props.data.maxModulesCount = sum
  return sum
})

const along = computed(() => Math.floor(props.data.length / props.panel.length))
const across = computed(() => Math.floor((props.data.width / (+props.data.slopes === 2 ? 2 : 1)) / props.panel.width))
</script>

<style lang="scss" scoped>
.roof {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px solid $color-grey-3;

  &-width {
    position: absolute;
    top: 50%;
    left: -2rem;
    transform: translateY(-50%);
    writing-mode: vertical-rl;
    line-height: 2rem;
    font-weight: 600;
  }

  &-length {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    line-height: 2rem;
    font-weight: 600;
  }

  &-background {
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: relative;
    background-color: $color-black;
    padding: 2px;
  }

  &-top,
  &-bottom {
    display: grid;
    height: 50%;
    max-height: 50%;
    background-image: url(@/assets/images/tiles.jpg);
    background-position: left top;
    padding: 0.5rem;
  }

  &-top {
    transform: scale(1, -1);
  }

  &-bottom {
    filter: brightness(0.8);
  }

  &-single-slope {
    height: 100%;
    max-height: initial;
  }

  &-metal {
    background-image: url(@/assets/images/metal.jpg);
  }

  &-panel {
    width: 100%;
    height: 100%;
    background: url(@/assets/images/panel.jpg) center / contain no-repeat;
  }
}
</style>
