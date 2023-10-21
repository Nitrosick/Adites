<template>
  <div class="contacts wrapper margined">
    <h1
      class="page-title"
      v-html="translates[ln].title"
    />
    <p
      class="contacts-text"
      v-html="translates[ln].subtitle"
    />
    <div
      v-for="person in persons"
      :key="person.id"
      class="contacts-item"
    >
      <span class="contacts-item-title">
        {{ person.berator[ln] }}:
        <NuxtLink :to="`/${person.id}`">
          {{ person.name }}
        </NuxtLink>
      </span>
      <GoogleMap :src="person.map" />
    </div>
  </div>
</template>

<script setup>
import { persons } from '@/const/persons'
import GoogleMap from '@/components/app/GoogleMap.vue'

const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: {
    title: 'Contacts',
    subtitle: 'You can choose a consultant in our region.',
  },
  de: {
    title: 'Kontakt',
    subtitle: 'Sie können einen Berater in unserer Region auswählen.',
  }
}

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;

  &-text {
    margin: 3rem 0 1rem 0;
  }

  &-item {
    width: 100%;
    padding: 1rem 0;
    border-top: 2px solid $color-grey-3;

    &-title {
      display: block;
      margin-bottom: 1rem;
    }
  }
}
</style>
