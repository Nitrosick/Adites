<template>
  <div
    v-if="project"
    class="project wrapper"
  >
    <h1 class="page-title">{{ project.power }}kWp</h1>
    <div class="project-image">
      <img
        :src="`/images/projects/${project.image}`"
        alt="project photo"
        loading="lazy"
      >
    </div>
    <span class="project-description">{{ project.description }}</span>
  </div>
</template>

<script setup>
import { projects } from '@/const/projects'

const { id } = useRoute().params
const project = projects.find(p => p.id === +id)
if (!project) throw createError({ statusCode: 404, statusMessage: 'Page not found' })
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
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
