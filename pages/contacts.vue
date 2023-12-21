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
    <Person
      v-for="person in persons"
      :key="person.id"
      :data="person"
    />
    <Form />
  </div>
</template>

<script setup>
import { persons } from '@/const/persons'
import Person from '@/components/page/contacts/Person.vue'
import Form from '@/components/page/contacts/Form.vue'

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
  },
  hr: {
    title: 'Kontakt',
    subtitle: 'Možete odabrati savjetnika u našoj regiji.',
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
}
</style>
