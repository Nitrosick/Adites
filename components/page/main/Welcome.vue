<template>
  <div class="welcome wrapper">
    <div class="welcome-text">
      <div class="welcome-text-title">
        <h2 v-html="translates[ln].title[0]" />
        <h2
          class="primary-color"
          v-html="translates[ln].title[1]"
        />
      </div>
      <div class="welcome-item">
        <img
          src="@/assets/images/sunrize.jpg"
          alt="sunrize"
        >
        <p
          class="welcome-item-content"
          v-html="translates[ln].text1"
        />
      </div>
      <div class="welcome-item">
        <img
          src="@/assets/images/energy.png"
          alt="energy"
        >
        <p
          class="welcome-item-content"
          v-html="translates[ln].text2"
        />
      </div>
    </div>
    <div class="welcome-image" />
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: {
    title: ['Welcome to ADITES', 'with us SIMPLY energy freedom'],
    text1: `
      Why photovoltaics?
      <ul>
        <li>Your path to energy freedom</li>
        <li>You protect the environment</li>
        <li>High and long-term returns</li>
        <li>Protection against rising electricity prices</li>
        <li>Increase in the value of your real estate</li>
      </ul>
    `,
    text2: `
      Why with us?
      <ul>
        <li>Complete offer including assembly and registration</li>
        <li>Reliable installation</li>
        <li>Transparency</li>
        <li>Systems of all sizes - private or commercial</li>
      <ul>
    `
  },
  de: {
    title: ['Herzlich Willkommen bei ADITES', 'mit uns EINFACH Energiefreiheit'],
    text1: `
      Warum Photovoltaik?
      <ul>
        <li>Ihr Weg zur Energiefreiheit</li>
        <li>Sie schützen die Umwelt</li>
        <li>Hohe und langfristige Rendite</li>
        <li>Absicherung vor steigenden Strompreisen</li>
        <li>Wertsteigerung ihrer Immobilien</li>
      </ul>
    `,
    text2: `
      Warum bei uns?
      <ul>
        <li>Komplettangebot inkl. Montage und Anmeldung</li>
        <li>Zuverlässige Installation</li>
        <li>Transparenz</li>
        <li>Anlagen aller Größen</li>
        <li>Privat oder gewerblich</li>
      </ul>
    `
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem 1rem;

  &-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &-title {
      h2 {
        text-align: left;
      }

      .primary-color {
        margin-top: 1rem;
      }
    }
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 2rem;

    &-content {
      font-size: $font-size-lg;
      line-height: 1.3rem;
    }
  }

  &-image {
    min-height: 35rem;
    background: url(/assets/images/transport.webp) left bottom / cover no-repeat;
  }
}

@include breakpoint-md {
  .welcome {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &-text {
      &-title {
        h2 {
          text-align: center;
        }
      }
    }

    &-item {
      gap: 0.5rem;

      &-content {
        font-size: $font-size-md;
        line-height: 1.2rem;
      }
    }

    &-image {
      min-height: 25rem;
    }
  }
}
</style>
