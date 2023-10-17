<template>
  <div
    v-if="project"
    class="project wrapper margined"
  >
    <h1 class="page-title">{{ project.power }}kWp</h1>
    <div class="project-image">
      <img
        :src="`/images/projects/${project.image}`"
        alt="project photo"
        loading="lazy"
      >
    </div>
    <span
      class="project-description"
      v-html="project.description[ln]"
    />
  </div>
</template>

<script setup>
import { projects } from '@/const/projects'

const { id } = useRoute().params
const project = projects.find(p => p.id === +id)
if (!project) throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: { title: 'Projects' },
  de: { title: 'Forschungsprojekte' },
  hr: { title: 'Projekti' }
}

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })
</script>

<style lang="scss" scoped>
.page-title {
  text-transform: none;
}

.project {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;

  &-image {
    height: 35rem;
    margin: 2rem 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
