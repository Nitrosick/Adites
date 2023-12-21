<template>
  <div class="consultants">
    <div class="consultants-background" />
    <div class="consultants-content wrapper">
      <h2
        class="consultants-title"
        v-html="translates[ln].title"
      />
      <div class="persons">
        <div
          v-for="person in persons"
          :key="person.id"
          class="persons-item"
        >
          <img
            :src="`/images/persons/${person.photo}`"
            alt="photo"
            class="persons-item-photo"
          >
          <NuxtLink
            to="/contacts"
            class="persons-item-name"
          >
            {{ person.name }}
          </NuxtLink>
          <span class="persons-item-contacts">
            {{ translates[ln].prefix }}
            {{ person.city[ln] }}<br>
            <a :href="`tel:${person.phone}`">{{ person.phone }}</a><br>
            <a :href="`mailto:${person.email}`">{{ person.email }}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { persons } from '@/const/persons'

const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: {
    title: 'Our solar consultants in your region',
    prefix: 'From'
  },
  de: {
    title: 'Unsere Solarberater in Ihrer Region',
    prefix: 'Aus'
  },
  hr: {
    title: 'Naši savjetnici za solarnu energiju u vašem području',
    prefix: 'Iz'
  }
}
</script>

<style lang="scss" scoped>
.consultants {
  position: relative;
  background: url(/assets/images/background_1.jpg) center / cover no-repeat;
  min-height: 30rem;

  &-background {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10rem;
    width: 100%;
    background-color: $color-background;
    z-index: 1;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem 1rem 4rem 1rem;
  }

  &-title {
    color: $color-white;
    margin-bottom: 2rem;
  }
}

.persons {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  z-index: 2;

  &-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    max-width: 27rem;
    padding: 2rem;
    background-color: $color-background;
    box-shadow: $shadow;

    &-photo {
      width: 100%;
    }

    &-name {
      text-align: center;
      font-size: $font-size-xl;
    }

    &-contacts {
      text-align: center;
      font-size: $font-size-lg;
    }
  }
}

@include breakpoint-md {
  .persons {
    &-item {
      gap: 0.5rem;
      max-width: 25rem;
      padding: 1rem;

      &-name {
        font-size: $font-size-lg;
      }

      &-contacts {
        font-size: $font-size-md;
      }
    }
  }
}
</style>
