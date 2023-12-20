<template>
  <div
    v-if="person"
    class="person wrapper margined"
  >
    <h1 class="page-title">{{ person.name }}</h1>
    <p
      v-if="person.description"
      class="person-description"
      v-html="person.description[ln]"
    />
    <div class="person-contacts">
      <span
        v-if="person.phone"
        class="person-contacts-icon"
      >
        <Icon img="phone-alt" />
      </span>
      <a
        v-if="person.phone"
        :href="`tel:${person.phone}`"
      >
        {{ person.phone }}
      </a>
      <br>
      <span
        v-if="person.email"
        class="person-contacts-icon"
      >
        <Icon img="envelope" />
      </span>
      <a
        v-if="person.email"
        :href="`mailto:${person.email}`"
      >
        {{ person.email }}
      </a>
    </div>
    <div class="person-images">
      <div class="person-photo">
        <img
          :src="`/images/persons/${person.photo}`"
          alt="photo"
        >
      </div>
      <GoogleMap :src="person.map" />
      <!-- <div class="person-location">
        <img
          :src="`/images/locations/${person.id}.jpg`"
          alt="location"
        >
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { persons } from '@/const/persons'
import GoogleMap from '@/components/app/GoogleMap.vue'

const id = useRoute().params.person
const person = persons.find(p => p.id === id)
if (!person) throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

const store = useMainStore()
const ln = computed(() => store.language)
const { projectTitle } = useRuntimeConfig().public

useHead({ title: () => `${projectTitle} | ${person.name}` })
</script>

<style lang="scss" scoped>
.page-title {
  text-transform: capitalize;
}

.person {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;

  &-description {
    border-bottom: 2px solid $color-grey-3;
    padding: 3rem 0 1rem 0;
  }

  &-contacts {
    padding: 1rem 0;
    line-height: 2rem;

    &-icon {
      font-size: $font-size-lg;
      margin-right: 0.5rem;
    }
  }

  &-images {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0.5rem;
  }

  &-photo,
  &-location {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@include breakpoint-md {
  .person {
    &-images {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &-photo {
      width: 100%;
      height: 30rem;
    }

    // &-location {
    //   object-fit: none;
    // }
  }
}
</style>
