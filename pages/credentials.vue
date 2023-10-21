<template>
  <div class="credentials wrapper margined">
    <h1
      class="page-title"
      v-html="translates[ln].title"
    />
    <div class="credentials-projects">
      <button
        v-for="project in projects"
        :key="project.id"
        class="project"
        @click.prevent="selected = project"
      >
        <div class="project-image">
          <img
            :src="`/images/projects/${project.image}`"
            alt="project photo"
            loading="lazy"
          >
        </div>
        <div class="project-overlay">
          <p class="project-description">
            {{ project.power ? `${project.power} kWp` : '' }}
            <span v-html="project.description[ln]" />
          </p>
        </div>
      </button>
    </div>
  </div>
  <div
    v-if="selected"
    class="credentials-viewer"
    @click="selected = null"
  >
    <div class="credentials-viewer-content">
      <img
        :src="`/images/projects/${selected.image}`"
        alt="project photo"
        class="credentials-viewer-image"
        loading="lazy"
      >
      <div class="credentials-viewer-description">
        <b v-if="selected.power">
          {{ selected.power }} kWp
        </b>
        <span v-html="selected.description[ln]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects } from '@/const/projects'
import { ref } from 'vue'

const selected = ref(null)
const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: { title: 'Credentials' },
  de: { title: 'Referenzen' }
}

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })
</script>

<style lang="scss" scoped>
.credentials {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;

  &-projects {
    width: 100%;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    padding: 3rem 0;
  }
}

.project {
  position: relative;
  height: 20rem;
  background-color: $color-grey-3;
  cursor: pointer;

  &-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-description {
    color: $color-white;
    text-align: center;
  }

  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-black-o;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    .project-overlay {
      opacity: 1;
    }
  }
}

.credentials-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: $color-black-o;
  padding: 1rem;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  &-content {
    padding: 0.3rem;
    background-color: $color-background;
  }

  &-description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}
</style>
