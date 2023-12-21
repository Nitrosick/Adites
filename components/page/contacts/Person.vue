<template>
  <div
    v-if="data"
    class="person"
  >
    <span class="person-name">
      {{ data.name }}
    </span>
    <p
      v-if="data.description"
      class="person-description"
      v-html="data.description[ln]"
    />
    <div class="person-contacts">
      <span
        v-if="data.phone"
        class="person-contacts-icon"
      >
        <Icon img="phone-alt" />
      </span>
      <a
        v-if="data.phone"
        :href="`tel:${data.phone}`"
      >
        {{ data.phone }}
      </a>
      <br>
      <span
        v-if="data.email"
        class="person-contacts-icon"
      >
        <Icon img="envelope" />
      </span>
      <a
        v-if="data.email"
        :href="`mailto:${data.email}`"
      >
        {{ data.email }}
      </a>
    </div>
    <div class="person-images">
      <div class="person-photo">
        <img
          :src="`/images/persons/${data.photo}`"
          alt="photo"
        >
      </div>
      <GoogleMap :src="data.map" />
    </div>
  </div>
</template>

<script setup>
import GoogleMap from '@/components/app/GoogleMap.vue'

const props = defineProps({
  data: { type: Object, required: true},
})

const store = useMainStore()
const ln = computed(() => store.language)
</script>

<style lang="scss" scoped>
.person {
  width: 100%;
  padding: 1rem 0;
  border-top: 2px solid $color-grey-3;

  &-name {
    font-weight: 600;
    font-size: $font-size-lg;
  }

  &-description {
    padding: 1rem 0;
  }

  &-contacts {
    padding: 1rem 0;
    line-height: 1.7rem;

    &-icon {
      font-size: $font-size-lg;
      margin-right: 0.7rem;
    }
  }

  &-images {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0.5rem;
  }

  &-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@include breakpoint-md {
  .person {
    &-images {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    &-photo img {
      max-width: 25rem;
      aspect-ratio: 3/4;
    }
  }
}
</style>
