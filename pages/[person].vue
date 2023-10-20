<template>
  <div
    v-if="person"
    class="person wrapper margined"
  >
    <h1 class="page-title">{{ person.name }}</h1>
    <!-- <div class="person-data">

    </div> -->
    <div class="person-contacts">
      <span class="person-contacts-icon">
        <Icon img="phone-alt" />
      </span>
      <a :href="`tel:${person.phone}`">{{ person.phone }}</a>
      <br>
      <span class="person-contacts-icon">
        <Icon img="envelope" />
      </span>
      <a :href="`mailto:${person.email}`">{{ person.email }}</a>
    </div>
    <div class="person-images">
      <div class="person-photo">
        <img
          :src="`/images/persons/${person.photo}`"
          alt="photo"
        >
      </div>
      <GoogleMap :src="person.map" />
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
  margin-bottom: 3rem;
}

.person {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;

  &-contacts {
    padding: 1rem 0;
    line-height: 2rem;
    // border-bottom: 2px solid $color-grey-3;

    &-icon {
      font-size: $font-size-lg;
      margin-right: 0.5rem;
    }
  }

  &-images {
    margin-top: 2rem;
    display: flex;
    gap: 0.5rem;
  }

  &-photo {
    width: 35vw;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
  }
}

@include breakpoint-sm {
  .person {
    &-photo {
      width: 100%;
    }
  }
}
</style>
