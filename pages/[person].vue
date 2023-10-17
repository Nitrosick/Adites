<template>
  <div
    v-if="person"
    class="person wrapper margined"
  >
    <h1 class="page-title">{{ person.name }}</h1>
    <div class="person-data">
      {{ translates[ln].mobile }}:
      <a :href="`tel:${person.phone}`">{{ person.phone }}</a>
    </div>
    <div class="person-data">
      E-mail:
      <a :href="`mailto:${person.email}`">{{ person.email }}</a>
    </div>
    <div class="person-images">
      <img
        :src="`/images/persons/${person.photo}`"
        alt="photo"
        class="person-photo"
      >
      <iframe
        :src="person.map"
        allowfullscreen=""
        loading="lazy"
        class="person-map"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script setup>
import { persons } from '@/const/persons'

const id = useRoute().params.person
const person = persons.find(p => p.id === id)
if (!person) throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

const store = useMainStore()
const ln = computed(() => store.language)
const { projectTitle } = useRuntimeConfig().public

const translates = {
  en: { mobile: 'Mobile' },
  de: { mobile: 'Mobile' },
  hr: { mobile: 'Mobilni' }
}

useHead({ title: () => `${projectTitle} | ${person.name}` })
</script>

<style lang="scss" scoped>
.page-title {
  text-transform: capitalize;
  margin-bottom: 3rem;
}

.person {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;

  &-data {
    padding: 1rem 0;
    border-bottom: 2px solid $color-grey-3;
  }

  &-images {
    margin-top: 2rem;
    display: flex;
    gap: 0.5rem;
  }

  &-photo {
    width: 30vw;
  }

  &-map {
    width: 100%;
    border: none;
    background-color: $color-grey-3;
  }
}

@include breakpoint-lg {
  .person {
    &-images {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    &-photo {
      width: 25rem;
    }

    &-map {
      height: 25rem;
    }
  }
}

@include breakpoint-sm {
  .person {
    &-photo {
      width: 100%;
    }

    &-map {
      height: 20rem;
    }
  }
}
</style>
