<template>
  <div class="welcome wrapper">
    <div class="welcome-title">
      <h2 v-html="translates[ln].title[0]" />
      <h2
        class="primary-color"
        v-html="translates[ln].title[1]"
      />
    </div>
    <ClientOnly>
      <div class="welcome-text">
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
    </ClientOnly>
    <img
      src="@/assets/images/office.jpg"
      alt="transport"
      class="welcome-image"
      loading="lazy"
    >
    <!-- <div class="welcome-image" /> -->
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
  },
  hr: {
    title: ['Dobrodošli u ADITES', 's nama je samo energija SLOBODE'],
    text1: `
      Zašto fotonaponski sustavi?
      <ul>
        <li>Vaš put do energetske slobodi</li>
        <li>Koje štite okoliš</li>
        <li>Visoka i dugotrajna dobit</li>
        <li>Zaštita od rasta cijena električne energije</li>
        <li>Povećanje vrijednosti vaše nekretnine</li>
      </ul>
    `,
    text2: `
      Zašto s nama?
      <ul>
        <li>Sveobuhvatna ponuda, uključujući montažu i registraciju</li>
        <li>Pouzdana instalacija</li>
        <li>Transparentnost</li>
        <li>Sustavi svih veličina - privatni ili komercijalni</li>
      </ul>
    `
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  gap: 2rem;
  padding: 2rem 1rem;

  &-title {
    h2 {
      text-align: left;
    }

    .primary-color {
      margin-top: 1rem;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    grid-row: 1/3;
    grid-column: 2/3;
    width: 100%;
  }
}

@include breakpoint-xl {
  .welcome {
    &-title {
      grid-column: 1/3;

      h2 {
        text-align: center;
      }
    }

    &-image {
      grid-row: auto;
      grid-column: auto;
    }
  }
}

@include breakpoint-lg {
  .welcome {
    display: flex;
    flex-direction: column;
  }
}
</style>
