<template>
  <div class="projects">
    <div class="projects-background" />
    <h2
      class="projects-title"
      v-html="translates[ln].title[0]"
    />
    <h2
      class="projects-subtitle"
      v-html="translates[ln].title[1]"
    />
    <ClientOnly>
      <div class="slider">
        <NuxtLink
          v-for="project in projects"
          :key="project.id"
          :to="`/projects/${project.id}`"
          class="slider-item"
        >
          <div class="slider-item-image">
            <img
              :src="`/images/projects/${project.image}`"
              alt="project photo"
              loading="lazy"
            >
          </div>
          <span class="slider-item-power">{{ project.power ? `${project.power} kWp` : '-'  }}</span>
          <p
            class="slider-item-description"
            v-html="project.description[ln]"
          />
          <div class="slider-item-overlay">
            <Icon img="link" />
          </div>
        </NuxtLink>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { projects } from '@/const/projects'

const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: { title: ['Our latest projects', 'Broad portfolio of technologies, products and solutions'] },
  de: { title: ['Unsere neuesten Projekte', 'Breites Portfolio an Technologien, Produkten und Lösungen'] },
  hr: { title: ['Naši najnoviji projekti', 'Širok raspon tehnologija, proizvoda i rješenja'] }
}
</script>

<style lang="scss" scoped>
.projects {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(/assets/images/background_2.jpg) center / cover no-repeat;
  padding: 7rem 0 2rem 0;
  min-height: 30rem;

  &-title {
    font-weight: 600;
    color: $color-white;
  }

  &-subtitle {
    margin: 1rem 0 4rem 0;
    color: $color-white;
  }

  &-background {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 7rem;
    width: 100%;
    background-color: $color-background;
    z-index: 1;
  }
}

.slider {
  position: relative;
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-bottom: 1rem;
  z-index: 2;
  overflow-x: auto;

  &-item {
    position: relative;
    gap: 1rem;
    min-width: 20rem;
    max-width: 20rem;
    height: 18rem;
    background-color: $color-background;
    box-shadow: $shadow;
    overflow: hidden;

    &-image {
      height: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-power {
      margin: 1rem 0.5rem;
      display: block;
      font-size: $font-size-lg;
      font-weight: 600;
      text-align: center;
    }

    &-description {
      margin: 0.5rem;
      color: $color-primary;
      font-weight: 500;
      text-align: center;
      line-height: 1.2rem;
    }

    &-overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-black-o;
      color: $color-white;
      font-size: $font-size-xxl;
      opacity: 0;
      transition: opacity 0.3s ;
    }

    &:hover {
      .slider-item-overlay {
        opacity: 1;
      }
    }
  }
}

@include breakpoint-md {
  .slider {
    &-item {
      min-width: 15rem;
      max-width: 15rem;
      height: 16rem;

      &-power {
        font-size: $font-size-md;
      }
    }
  }
}
</style>
